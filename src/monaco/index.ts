import { getCurrentInstance, onMounted, watch } from 'vue';
import { createSingletonPromise } from '@antfu/utils';
/* __imports__ */
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
// for Monaco Editor
import 'monaco-editor/esm/vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp.js';
// 引入 Monaco Editor 所有的内置语言和控件
import 'monaco-editor/esm/vs/basic-languages/monaco.contribution';

import vueuseTypes from '@vueuse/core/index.d.ts?raw';
import vueTypes from '@vue/runtime-dom/dist/runtime-dom.d.ts?raw';

import { orchestrator } from '~/orchestrator';
import { loadWorks } from './worker';

export const setupMonaco = createSingletonPromise(async () => {
  monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
    ...monaco.languages.typescript.javascriptDefaults.getCompilerOptions(),
    noUnusedLocals: false,
    noUnusedParameters: false,
    allowUnreachableCode: true,
    allowUnusedLabels: true,
    strict: false,
    allowJs: true
  });

  const registered: string[] = ['vue', '@vueuse/core'];

  monaco.languages.typescript.javascriptDefaults.addExtraLib(
    `
    declare module '@vueuse/core' { ${vueuseTypes} }
  `,
    'ts:@vueuse/core'
  );
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `
    declare module '@vueuse/core' { ${vueuseTypes} }
  `,
    'ts:@vueuse/core'
  );

  monaco.languages.typescript.javascriptDefaults.addExtraLib(
    `
    declare module 'vue' { ${vueTypes} }
  `,
    'ts:@vue/runtime-dom'
  );
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `
    declare module 'vue' { ${vueTypes} }
  `,
    'ts:@vue/runtime-dom'
  );

  watch(
    () => orchestrator.packages,
    () => {
      orchestrator.packages.forEach((pack) => {
        if (registered.includes(pack.name)) return;

        registered.push(pack.name);
        monaco.languages.typescript.javascriptDefaults.addExtraLib(
          `
        declare module '${pack.name}' {
          let x: any;
          export = x;
        }
      `,
          pack.name
        );
      });
    },
    { immediate: true }
  );

  await loadWorks();
  window.monaco = monaco;

  return { monaco };
});
