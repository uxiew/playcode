/***
 * monaco 实现了这些功能，目前支持html，css，ts/js，json
 * 自动补全，错误提示，以及语法高亮
 */
export async function loadWorks() {
  // 加载所需的 worker
  await Promise.all([
    // load workers
    (async () => {
      const [
        { default: EditorWorker },
        { default: JSONWorker },
        { default: CssWorker },
        { default: HtmlWorker },
        { default: TsWorker }
      ] = await Promise.all([
        import('monaco-editor/esm/vs/editor/editor.worker?worker'),
        import('monaco-editor/esm/vs/language/json/json.worker?worker'),
        import('monaco-editor/esm/vs/language/css/css.worker?worker'),
        import('./languages/html/html.worker?worker'),
        import('monaco-editor/esm/vs/language/typescript/ts.worker?worker')
      ]);

      self.MonacoEnvironment = {
        getWorker(_: any, label: string) {
          if (label === 'json') {
            return new JSONWorker();
          }
          if (label === 'css' || label === 'scss' || label === 'less') {
            return new CssWorker();
          }
          if (label === 'html' || label === 'handlebars' || label === 'razor')
            return new HtmlWorker();
          if (label === 'typescript' || label === 'javascript')
            return new TsWorker();
          return new EditorWorker();
        }
      };
    })()
  ]);
}
