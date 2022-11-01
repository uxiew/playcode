import { reactive, watch, watchEffect } from 'vue';
// import { parse } from '@vue/compiler-sfc'
import { createEventHook } from '@vueuse/core';
import lz from 'lz-string';
import { KeyList, templateList } from './templates/templates';
import { parserTemplate } from './utils/parser';
import { isStyleFile } from './utils/tools';
import { pkgFetch } from './utils/pkg';
import type { Package } from './utils/pkg';
import { compileFile } from './logic/useCompiler';
// import { templates } from '~/configs/templates';
// const demos = import.meta.glob('../demos/**/*.(vue|json)')

export interface Orchestrator {
  // 项目类型 vue|react|angular
  type: KeyList;
  // 文件
  files: {
    [key: string]: OrchestratorFile;
  };
  // 依赖
  packages: (Package | never)[];
  // 当前文件名
  activeFilename: string;
  // 错误
  errors: (string | Error)[];
  // 运行时错误
  runtimeErrors: (string | Error)[];

  // 当前文件
  readonly activeFile: OrchestratorFile | undefined;
  // 导入依赖图
  readonly importMap: string;
}

const shouldUpdateContent = createEventHook();

export class OrchestratorFile {
  filename: string;
  template: string;
  script: string;
  style: string;

  compiled = {
    js: '',
    css: '',
    ssr: '',
    html: ''
  };

  constructor(
    filename: string,
    script: string | undefined,
    template?: string | undefined,
    style?: string
  ) {
    this.filename = filename;
    this.template = template || '';
    this.script = script || '';
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
    return this.script;
  }
}

/**
 * Main app orchestrator, handles all the files, import maps, and errors
 */
export const orchestrator: Orchestrator = reactive({
  type: 'typescript',
  files: {},
  packages: [],
  activeFilename: 'app.ts',
  errors: [],
  runtimeErrors: [],

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
 * Setup Watchers
 */

watchEffect(() => {
  if (orchestrator.activeFile) compileFile(orchestrator.activeFile);
});

watch(
  () => orchestrator.activeFilename,
  () => {
    shouldUpdateContent.trigger(null);
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

  compileFile(orchestrator.files[file.filename]);
}

export function setActiveFile(name: string) {
  orchestrator.activeFilename = name;
}

/**
 * Remove a file from the orchestrator
 *
 * @param name Name of file to remove
 */
export function removeFile(name: string) {
  delete orchestrator.files[name];
  setTimeout(() => setActiveFile('App.vue'), 0);
}

/**
 * Remove all files from the orchestrator
 */
export function removeAllFiles() {
  orchestrator.files = {};
}

/**
 * Load a demo folder
 *
 * @param name Name of demo to open
 */
// export async function openDemo(name: string) {
//   // Get all modules from demo
//   const modules = (await Promise.all(Object.entries(demos)
//     .filter(([path]) => path.split('demos/')[1].split('/')[0] === name)
//     .filter(([path]) => path.includes('.vue') || path.includes('.json'))
//     .map(async([path]) => ([path, (await import(`${path}?raw`)).default]))))

//   console.log(modules)

//   const packages = (await Promise.all(Object.entries(demos)
//     .filter(([path]) => path.split('demos/')[1].split('/')[0] === name)
//     .filter(([path]) => path.includes('.json'))
//     .map(async([path, imp]) => ([path, (await imp()).default]))))
//     .find(([path]) => path.includes('packages.json'))

//   if (packages)
//     orchestrator.packages = packages[1]

//   removeAllFiles()

//   // Load Vue Files
//   modules
//     .filter(([path]) => path.includes('.vue'))
//     .map(([path, content]) => {
//       const { descriptor: { template, scriptSetup } } = parse(content)
//       return {
//         filename: path.split(`${name}/`)[1],
//         script: scriptSetup?.content.trim(),
//         template: template?.content.trim(),
//       }
//     })
//     .forEach(({ filename, script, template }) => {
//       addFile(new OrchestratorFile(filename, template, script))
//     })

//   setActiveFile('App.vue')
//   shouldUpdateContent.trigger(null)
// }
// openDemo('default')

export const onShouldUpdateContent = shouldUpdateContent.on;

/*
// App.vue
const appTemplate = `
<div
  grid="~ flow-col gap-4"
  place="content-center items-center"
  h="screen"
  font="mono"
  >
  <Coordinate label="X" :value="x" />
  <Coordinate label="Y" :value="y" />
</div>
`;
const appScript = `
import { useMouse } from '@vueuse/core'
import Coordinate from './Coordinate.vue'

const { x, y } = useMouse()
`;

// Coordinate.vue
const coordinateTemplate = `
<div
  font="mono"
  bg="light-500 dark:dark-500"
  flex="~ col"
  text="center"
  p="2"
  border="rounded"
>
  <span text="4xl">{{ value }}</span>
  <span text="sm dark:light-900 dark:opacity-50" m="t-2">Mouse {{ label }}</span>
</div>
`;

const coordinateScript = `
defineProps({
  label: String,
  value: Number,
})
`;

const initialPackages = [
  {
    name: 'vue-demi',
    source: 'unpkg',
    description:
      'Vue Demi (half in French) is a developing utility allows you to write Universal Vue Libraries for Vue 2 & 3',
    url: 'https://unpkg.com/vue-demi@0.13.11/lib/index.mjs',
    version: '0.13.11'
  },
  {
    name: '@vueuse/shared',
    source: 'unpkg',
    description: 'Shared VueUse utilities.',
    url: 'https://unpkg.com/@vueuse/shared@9.0.0/index.mjs',
    version: '9.0.0'
  },
  {
    name: '@vueuse/core',
    source: 'unpkg',
    description: 'Collection of essential Vue Composition Utilities',
    url: 'https://unpkg.com/@vueuse/core@9.0.0/index.mjs',
    version: '9.0.0'
  }
];

*/
// 初始化
export function orchestratorInit(type: KeyList = 'typescript') {
  removeAllFiles();
  const { files, packages } = templateList[type];
  orchestrator.type = type;

  // @ts-ignore
  orchestrator.packages = pkgFetch(packages);

  for (const { name, active, value, extension } of files) {
    const result = parserTemplate(name, extension, value);
    addFile(new OrchestratorFile(...result));
    active && setActiveFile(result[0]);
  }

  shouldUpdateContent.trigger(null);
}

setTimeout(() => {
  orchestratorInit();
}, 0);
