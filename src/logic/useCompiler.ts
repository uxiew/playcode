// 根据当前选择的模版自动切换到对应的编译环境

// react node scss angular rust deno dart solid svelte

import { compileModulesForPreview } from '~/compiler/moduleCompiler';
import { MAIN_FILE, compileVueFile } from '~/compiler/vueCompiler';
// import { MAIN_FILE } from '~/compiler/reactCompiler';
// import {  } from '~/compiler/styleCompiler';
import { orchestrator as store, OrchestratorFile } from '~/orchestrator';
import { ref } from 'vue';
import { isStyleFile } from '~/utils/tools';

/**
 * 加载 全局的 css
 */
export const loadGlobalStyles = () => {
  const styles = [];
  for (const filename in store.files) {
    if (isStyleFile(filename)) styles.push(store.files[filename].compiled.css);
  }
  return styles.join('');
};

/**
 * 每个项目的入口文件，进行默认加载
 */
export const getBootstrap = (type: string): string => {
  let bootstrap = '';
  console.log(type);
  if (type.startsWith('vue')) {
    bootstrap = `import { createApp } from "vue";
        const app = window.__app__ =  createApp(__modules__["${MAIN_FILE}"].default)
        app.config.errorHandler = e => console.error(e)
        app.mount('#app')`;

    // bootstrap = `import { createApp  } from 'vue'
    // import ElementPlus from 'element-plus'
    // // ("https://unpkg.com/element-plus@2.2.19/dist/index.css")
    // // import 'element-plus/dist/index.css'

    // const app = window.__app__ =  createApp(__modules__["${MAIN_FILE}"].default)
    // app.use(ElementPlus)
    // app.mount('#app')`;
  }
  if (type.startsWith('react')) {
    // bootstrap = `import { createApp as _createApp } from "vue";
    //     const app = window.__app__ =  _createApp(__modules__["${MAIN_FILE}"].default)
    //     app.config.errorHandler = e => console.error(e)
    //     app.mount('#app')`;

    bootstrap = `import { createApp as _createApp } from 'vue'
    import ElementPlus from 'element-plus'
    // import 'element-plus/dist/index.css'
 
    const app = window.__app__ =  _createApp(__modules__["${MAIN_FILE}"].default)
    // app.use(ElementPlus)
    app.mount('#app')`;
  }
  return bootstrap.trim();
};

// 在 templates 的 active 属性打开的文件即为入口文件
export function useCompiler() {
  function updateCode() {}

  return {
    bootStrapStr: ``,
    updateCode
  };
}

/**
 * 编译文件！
 */
export function compileFile(file: OrchestratorFile) {
  if (store.type.startsWith('vue')) {
    compileVueFile(file);
  }
  if (store.type.startsWith('react')) {
    compileVueFile(file);
  }
  if (store.type.startsWith('svelte')) {
    compileVueFile(file);
  }
  if (store.type.startsWith('solid')) {
    compileVueFile(file);
  }
  if (store.type === 'scss' || store.type === 'less') {
    compileVueFile(file);
  }

  return compileVueFile(file);
  // return compileNodeFile(file);
}

export { MAIN_FILE, compileModulesForPreview, store };
