import { reactive, watch } from 'vue';
import { createEventHook } from '@vueuse/core';
import lz from 'lz-string';
import { templateList } from './templates';
import { isStyleFile, isTemplateFile } from './utils/tools';
import { pkgFetch } from './utils/pkg';
import templateHtml from '~/templates/template.html?raw';
import { setSettings, settings } from '~/configs/settings';
import {
  state as previewState,
  updatePreview
} from '~/logic/usePreview/preview';
import { parserTemplate, compileFile } from '~/logic/useCompiler';

import type { Package } from './utils/pkg';
import type { KeyList } from './templates';
import type { Settings } from '~/configs/settings';

export type sourceType = 'template' | 'script' | 'style';

export interface Orchestrator {
  // 项目类型 vue|react|angular
  type: KeyList;
  // 文件
  files: Record<string, OrchestratorFile>;
  // 依赖
  packages: (Package | never)[];
  // 当前文件名
  activeFilename: string;
  // 错误
  errors: (string | Error)[];
  // 运行时错误
  runtimeErrors: (string | Error)[];
  configs: Settings; // 项目当前的一些配置

  // 当前文件
  readonly activeFile: OrchestratorFile | undefined;
  // 导入依赖图
  readonly importMap: string;
}

const shouldUpdateContent = createEventHook();

export class OrchestratorFile {
  filename: string;
  ext: string; // 扩展名
  template: string;
  script: string;
  style: string;
  // 关闭该文件
  closed: boolean = false;

  compiled = {
    js: '',
    css: '',
    ssr: '',
    html: ''
  };

  constructor(
    filename: string,
    script: string | undefined,
    ext?: string | undefined,
    template?: string | undefined,
    style?: string
  ) {
    this.filename = filename;
    this.script = script || '';
    this.ext = ext || '';
    this.template = template || '';
    this.style = style || '';
  }

  get code() {
    if (this.filename.endsWith('.vue')) {
      return `<script setup>
        ${this.script}
      </script>
      <template>
        ${this.template}
      </template>
      <style scoped>
        ${this.style}
      </style>`;
    }
    if (this.filename.endsWith('.svelte')) {
      return `<script>
        ${this.script}
      </script>
      ${this.template}
      <style>
        ${this.style}
      </style>`;
    }
    if (isStyleFile(this.filename)) {
      return this.style;
    }
    if (isTemplateFile(this.filename)) {
      return this.template;
    }
    return this.script;
  }
}

/**
 * Main app orchestrator, handles all the files, import maps, and errors
 */
export const orchestrator: Orchestrator = reactive({
  type: 'javascript',
  files: {},
  packages: [],
  activeFilename: 'main.js',
  errors: [],
  runtimeErrors: [],
  configs: {},

  get activeFile() {
    // @ts-ignore
    return orchestrator.files[this.activeFilename];
  },

  get importMap() {
    const imports =
      orchestrator.packages.map(({ name, url }) => `"${name}": "${url}"`) || [];

    return `
      {
        "imports": {
          ${imports.join(',\n')}
        }
      }
    `;
  }
});

/**
 * Setup Watcher
 */
watch(
  () => [
    orchestrator.activeFilename,
    orchestrator.files[orchestrator.activeFilename]?.code
  ],
  ([name1, content1], [name2, content2]) => {
    if (content1 === undefined) return;
    if (name1 !== name2) {
      shouldUpdateContent.trigger(null);
    }
    if (name1 === name2 && content1 !== content2) {
      updatePreview();
    }
  }
);

/**
 * 导出当前状态可分享
 */
export function exportState() {
  const files = Object.entries(orchestrator.files).reduce(
    (acc, [name, { template, script }]) => {
      acc[name] = { template, script };
      return acc;
    },
    {}
  );

  // const { files, packages } = JSON.parse(
  //   lz.decompressFromEncodedURIComponent(location.hash.slice(1))
  // );

  return lz.compressToEncodedURIComponent(
    JSON.stringify({
      packages: orchestrator.packages,
      files
    })
  );
}

/**
 * Add a file to the orchestrator
 *
 * @param file File content
 */
export function addFile(file: OrchestratorFile) {
  orchestrator.files = {
    ...orchestrator.files,
    [file.filename]: file
  };

  return compileFile(orchestrator.files[file.filename]);
}

export function setActiveFile(name: string) {
  orchestrator.activeFilename = name;
}

/**
 * Remove a file from the orchestrator
 *
 * @param name  Name of file to remove
 */
export function removeFile(name: string) {
  const filesArr = Object.values(orchestrator.files);
  delete orchestrator.files[name];

  let nextFileIndex = 0;
  // 重洗顺序
  for (let i = 0; i < filesArr.length; i++) {
    if (filesArr[i].filename === name) {
      nextFileIndex = i + 1 === filesArr.length ? i - 1 : i + 1;
      break;
    }
  }

  // 激活文件
  setTimeout(() => {
    setActiveFile(filesArr[nextFileIndex].filename);
  }, 0);
}

/**
 * Remove all files from the orchestrator
 */
export function resetInit() {
  previewState.ready = false;
  orchestrator.files = {};
}

export const onShouldUpdateContent = shouldUpdateContent.on;

function mockHtml(type: KeyList) {
  const { files } = orchestrator;
  if (!files['index.html']) {
    addFile(new OrchestratorFile('index.html', '', '.html', templateHtml, ''));
    orchestrator.files['index.html'].closed = true;
  }
}

// ---初始化--
export function orchestratorInit(type: KeyList = 'javascript') {
  resetInit();
  const { files, packages, configs } = templateList[type];
  orchestrator.type = type;

  // settings
  setSettings(configs);
  // @ts-ignore
  orchestrator.packages = pkgFetch(packages);

  let num = 0;
  files.forEach(({ name, active, value, extension }, i) => {
    const result = parserTemplate(name, extension, value);
    active && setActiveFile(result[0]);

    // 编译完成 ready = true
    addFile(new OrchestratorFile(...result)).then(() => {
      num++;
      if (num === files.length) previewState.ready = true;
    });
  });

  if (settings.preview) mockHtml(type);

  shouldUpdateContent.trigger(null);
}

setTimeout(() => {
  orchestratorInit('javascript');
}, 0);
