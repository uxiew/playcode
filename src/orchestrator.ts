import { reactive, watch } from 'vue';
import { createEventHook } from '@vueuse/core';
import lz from 'lz-string';
import { templateList } from './templates';
import {
  isEntryFile,
  isNotUndefined,
  isStyleFile,
  isTemplateFile
} from './utils/tools';
import { pkgFetch } from './utils/pkg';
import templateHtml from '~/templates/template.html?raw';
import { setSettings, settings } from '~/configs/settings';
import { state as previewState } from '~/logic/usePreview/preview';
import { parserTemplate, compileFile } from '~/logic/useCompiler';
import {
  clearEditorState,
  createOrUpdateModel,
  getModel
} from '~/monaco/utils';

import type { Package } from './utils/pkg';
import type { KeyList } from './templates';
import type { Settings } from '~/configs/settings';

export type sourceType = 'template' | 'script' | 'style';
export interface TemplateResult {
  filename: string;
  ext: string;
  script?: string;
  style?: string;
  template?: string;
  newly?: string;
}

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
  readonly activeFile: OrchestratorFile;
  // 导入依赖图
  readonly importMap: string;
}

const shouldUpdateContent = createEventHook();

export class OrchestratorFile {
  filename: string;
  ext: string; // 扩展名
  // 标识新增
  newly?: string;
  // 关闭该文件
  closed: boolean = false;

  compiled = {
    js: '',
    css: '',
    ssr: '',
    html: ''
  };

  constructor(filename: string, ext?: string | undefined) {
    this.filename = filename;
    this.ext = ext || '';
  }
  get script() {
    return getModel(this.filename, 'script')?.getValue();
  }
  get template() {
    return getModel(this.filename, 'template')?.getValue();
  }
  get style() {
    return getModel(this.filename, 'style')?.getValue();
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
    return this.files[this.activeFilename];
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
    if (content1 === undefined || content2 === undefined) return;
    if (name1 !== name2) {
      shouldUpdateContent.trigger({ newName: name1, oldName: name2 });
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
 * rename a file
 *
 * @param file File content
 */
export async function renameFile({
  filename: name,
  newly
}: {
  filename: string;
  newly: string;
}) {
  // 如果是重命名
  if (!orchestrator.files[name]) {
    orchestrator.files = {
      ...orchestrator.files,
      [newly]: orchestrator.files[name]
    };
    delete orchestrator.files[name];
  }
  setActiveFile(name);
  orchestrator.files[name].newly = newly;

  return compileFile(orchestrator.files[name]);
}

/**
 * Add a file to the orchestrator
 *
 * @param file File content
 */
export async function addFile({
  filename: name,
  ext,
  script,
  template,
  style,
  newly
}: TemplateResult) {
  // 支持空格字符串
  // 兼容 vue 文件的分割
  isNotUndefined(script) && (await createOrUpdateModel(name, 'script', script));
  isNotUndefined(style) && (await createOrUpdateModel(name, 'style', style));
  isNotUndefined(template) &&
    (await createOrUpdateModel(name, 'template', template));

  orchestrator.files = {
    ...orchestrator.files,
    [name]: new OrchestratorFile(name, ext)
  };

  // 处理新建文件
  if (newly) {
    // @ts-ignore
    orchestrator.files[name].newly = true;
    // 自动打开新建的文件
    setActiveFile(name);
  }

  return compileFile(orchestrator.files[name]);
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
  setActiveFile(filesArr[nextFileIndex].filename);

  // 清除对应 model
  ['script', 'style', 'template'].forEach((type) =>
    getModel(name, type as sourceType)?.dispose()
  );
}

export function setActiveFile(name: string) {
  if (!orchestrator.files[name]) return;
  orchestrator.activeFilename = name;
  // window.monaco.editor.setModel(getModel(name));
}

/**
 * Remove all files from the orchestrator
 */
export function resetInit() {
  previewState.ready = false;
  orchestrator.files = {};
  clearEditorState();
}

export const onShouldUpdateContent = shouldUpdateContent.on;

async function mockHtml(type: KeyList) {
  const { files } = orchestrator;
  if (!files['index.html']) {
    await addFile({
      filename: 'index.html',
      script: '',
      ext: '.html',
      template: templateHtml,
      style: ''
    });
    orchestrator.files['index.html'].closed = true;
  }
  return Promise.resolve();
}

// ---初始化--
export async function orchestratorInit(type: KeyList = 'javascript') {
  resetInit();
  const { files, packages, configs } = templateList[type];
  orchestrator.type = type;

  // settings
  setSettings(configs);
  // @ts-ignore
  orchestrator.packages = pkgFetch(packages);

  let num = 0;

  for (const { name, active, value, extension } of files) {
    const result = parserTemplate(name, extension, value);
    await addFile(result);

    // 设置默认打开文件
    if (isEntryFile(name)) {
      setActiveFile(result.filename);
    } else {
      active && setActiveFile(result.filename);
    }
  }

  // 编译完成 ready = true
  if (settings.preview) await mockHtml(type);
  previewState.ready = true;
  shouldUpdateContent.trigger(null);
}

setTimeout(() => {
  orchestratorInit('javascript');
}, 0);
