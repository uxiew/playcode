import templateHtml from '~/templates/template.html?raw';
import templateJS from '~/templates/template.js?raw';
import { orchestrator as store } from '~/orchestrator';
import { compileModules, getMountID } from '../useCompiler';

function _loadPkgMaps(script: string) {
  let importMap: Record<string, any> = {};
  try {
    importMap = JSON.parse(store.importMap || '{"imports":{}}');
  } catch (e) {
    store.errors = [`Syntax error in import-map.json: ${e.message}`];
  }
  return script.replace(
    '<!--IMPORTMAP-->',
    `<!-- ES Module Shims: Import maps polyfill for modules browsers without import maps support (all except Chrome 89+) -->
      <script async src="https://unpkg.com/es-module-shims@1.6.2/dist/es-module-shims.wasm.js"></script>
      <script id="importmap" type="importmap">${JSON.stringify(
        importMap
      )}</script>`
  );
}

/**
 * 动态获取 domId
 */
function _prune(html: string) {
  // fix mount point for react/vue
  return html.replace('APP_MOUNT_POINT', getMountID());
}

export function normalizeHTML(html: string, template?: string) {
  if (!/<html |<!DOC/.test(html)) {
    html = templateHtml.replace(/<div id="APP_MOUNT_POINT"><\/div>/, html);
  }
  return _prune(html);
}

/**
 * prepare `index.html` file for preview, initialize runtime libs's Map，
 * @param reload 重新渲染
 */
export function prepareHTML(): string {
  let compiled = store.files['index.html']?.compiled;
  let iframe = compiled.html;

  let styles = loadStyles();
  let scripts = loadScripts();

  iframe = normalizeHTML(iframe);
  // throw new Error('You only need body tag content');

  iframe = _loadPkgMaps(iframe)
    .replace('//JS', templateJS)
    .replace('<!--STYLES-->', styles)
    .replace('<!--SCRIPTS-->', scripts);

  return (compiled.html = iframe);
}

/**
 * 合并css并加载css
 */
export function loadStyles() {
  let styles = '';
  for (const name in store.files) {
    if (store.files[name].compiled.css) {
      styles += `<style id="${name}">
        ${store.files[name].compiled.css.replace(/\n\s/, '')} 
      </style>`;
    }
  }
  return styles;
}

function loadScripts() {
  const modules = compileModules();
  let scriptString = '';
  modules.forEach((module) => {
    const [name, ...script] = module.split(':_:');
    // There must be script
    scriptString += `<script type="module" id="${name}">${script.join(
      ''
    )}</script>`;
  });
  return scriptString;
}
