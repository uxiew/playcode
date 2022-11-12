import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'less/lib/less-browser/' {
  function render(css: string, options: {}, fn: Function): void;
}

declare global {
  interface Window {
    monaco: typeof monaco;
  }
}
