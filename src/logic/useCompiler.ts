// 根据当前选择的模版自动切换到对应的编译环境

// react node scss angular rust deno dart solid svelte
import * as vueCompiler from '@vue/compiler-sfc';
import { processFile } from '~/compiler/moduleCompiler';
import { compileVueFile } from '~/compiler/vueCompiler';
// import {  } from '~/compiler/styleCompiler';
import { babelCompile } from '~/compiler/BabelCompiler';
import { compileStyleFile } from '~/compiler/styleCompiler';
import { compileTemplateFile } from '~/compiler/templateCompiler';
import {
  orchestrator as store,
  sourceType,
  TemplateResult
} from '~/orchestrator';
import {
  getContainerDOMId,
  isEntryFile,
  isJSXFile,
  isScriptFile,
  isStyleFile,
  isTemplateFile
} from '~/utils/tools';

import type { OrchestratorFile } from '~/orchestrator';

// 编译对应js文件并加载
export function compileModules() {
  let modules: Array<string> = [];
  for (const name in store.files)
    if (isEntryFile(name)) modules = processFile(store.files[name]);

  // ["demo.ts:_:const __module__ = __modules__[\"demo.ts\"] =..."]
  return modules;
}

/**
 * 处理编译每个文件！
 */
export async function compileFile(
  file: OrchestratorFile,
  from?: sourceType
): Promise<void> {
  const { filename, script, template, style } = file;
  if (script?.trim() === template?.trim() && template?.trim() === style?.trim())
    return;

  // 样式一般不会影响程序逻辑，比如 vue
  if (isStyleFile(filename) || from === 'style') {
    await compileStyleFile(file);
    return;
  }

  if (isTemplateFile(filename)) {
    await compileTemplateFile(file);
    return;
  }

  if (isScriptFile(filename) || isJSXFile(filename)) {
    await babelCompile(file);
    return;
  }

  if (filename.endsWith('.vue')) {
    await compileVueFile(file);
    return;
  }

  // if (store.type.endsWith('.svelte')) compileSvelteFile(file);
  // if (store.type.endsWith('.solid')) compileSolidFile(file);

  // if (isRustFile(filename)) compileRustFile(file);
  // return compileNodeFile(file);
}

/**
 * 获取 挂载点 id
 */
export function getMountID() {
  return getContainerDOMId(
    (
      store.files['main.ts'] ||
      store.files['main.tsx'] ||
      store.files['main.js'] ||
      store.files['main.jsx']
    )?.script
  );
}

/**
 * parser file's sourcecode to three part (script,template,style)
 */
export function parserTemplate(
  name: string,
  ext: string,
  code: string = ''
): TemplateResult {
  let filename = name + ext,
    script = code,
    template = '',
    style = '';

  if (ext === '.vue') {
    const descriptor = vueCompiler.parse(script, { filename }).descriptor;
    script =
      descriptor.script?.content || descriptor.scriptSetup?.content || '';
    template = descriptor.template?.content || '';
    style = descriptor.styles[0]?.content;
  }

  if (ext === '.html') {
    script = '';
    template = code;
  }

  if (isStyleFile(ext)) {
    script = '';
    style = code;
  }

  return { filename, script, ext, template, style };
}
