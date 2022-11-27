import { watch } from 'vue';
import { createSingletonPromise } from '@antfu/utils';
/* __imports__ */
import * as monaco from 'monaco-editor';
/**
 * Using Vite
 * @link https://github.com/microsoft/monaco-editor/blob/main/docs/integrate-esm.md#using-vite
 */

// for Monaco Editor
import 'monaco-editor/esm/vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp.js';
// 引入 Monaco Editor 所有的内置语言和控件
import 'monaco-editor/esm/vs/basic-languages/monaco.contribution';

// 引入指定语言和控件
import 'monaco-editor/esm/vs/basic-languages/rust/rust';
import 'monaco-editor/esm/vs/basic-languages/rust/rust.contribution';

// definitions
import reactTypes from '../../node_modules/@types/react/index.d.ts?raw';
import vueuseTypes from '@vueuse/core/index.d.ts?raw';
import vueTypes from '@vue/runtime-dom/dist/runtime-dom.d.ts?raw';

import { orchestrator } from '~/orchestrator';
import { loadWorks } from './worker';

export const setupMonaco = createSingletonPromise(async () => {
  // ----jsx---
  monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.Latest,
    allowNonTsExtensions: true,
    moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
    module: monaco.languages.typescript.ModuleKind.CommonJS,
    noEmit: true,
    esModuleInterop: true,
    jsx: monaco.languages.typescript.JsxEmit.React,
    reactNamespace: 'React',
    allowJs: true,
    typeRoots: ['node_modules/@types']
  });

  monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: false,
    noSyntaxValidation: true
  });

  // extra libraries
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `declare module 'react' { ${reactTypes} }`,
    'ts:react'
  );

  // ------
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
