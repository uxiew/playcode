import * as vueCompiler from '@vue/compiler-sfc';
import type { Orchestrator } from '~/orchestrator';
// import  * as svelteCompiler from '@vue/compiler-sfc'

/**
 * parser file's sourcecode to three part (script,template,style)
 */
export function parserTemplate(
  name: string,
  ext: string,
  code: string
): [filename: string, script: string, template: string, style: string] {
  let filename = name + ext,
    script = code,
    template = '',
    style = '';

  if (ext === '.vue') {
    const descriptor = vueCompiler.parse(script, { filename }).descriptor;
    script =
      descriptor.script?.content || descriptor.scriptSetup?.content || '';
    template = descriptor.template?.content || '';
    style = descriptor.styles[0].content;
  }

  if (ext === '.html') {
    script = '';
    template = code;
  }

  if (ext === '.svelte') {
    script = code;
  }

  if (/\.(sc|le|c)ss/.test(ext)) {
    script = '';
    style = code;
  }

  return [filename, script, template, style];
}

/**
 * initialize runtime libs's Map
 */
export function initImportLibsMap(
  iframeStr: string,
  store: Orchestrator
): string {
  let importMap: Record<string, any> = {};
  try {
    importMap = JSON.parse(store.importMap || '{}');
  } catch (e) {
    store.errors = [`Syntax error in import-map.json: ${e.message}`];
  }
  if (!importMap.imports) importMap.imports = {};
  return iframeStr.replace(/<!--IMPORT_MAP-->/, JSON.stringify(importMap));
}
