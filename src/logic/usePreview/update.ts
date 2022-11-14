import { getProxy } from './preview';
import { compileModules, compileFile, getMountID } from '~/logic/useCompiler';
import { orchestrator as store, sourceType } from '~/orchestrator';
import { Ref, ref } from 'vue';

export let contentType: Ref<sourceType> = ref('script'); // 默认类型

export async function updatePkgs(pkg: string) {
  // const modules = compileModules();
}

/**
 * 新增文件
 * 只能 script、style 文件
 */
export function updateNewFile(name: string) {
  const tag = contentType.value;
  const iSrcdoc = getProxy().iframe.srcdoc;
  switch (tag) {
    case 'script':
      {
        iSrcdoc.replace(
          `}}</script>`,
          `}}</script>\n<script type="module" id=${name}></script>`
        );
      }
      break;
    case 'style':
      {
        iSrcdoc.replace(`</style>`, `</style><style id=${name}></style>`);
      }
      break;
    default:
      break;
  }

  delete store.activeFile.newly;
}

function update(name: string, content: string, type?: sourceType) {
  console.log('--😄--update----', name, contentType.value);
  return getProxy().eval(
    `const code = ${JSON.stringify(content)};
     __update__('${type || contentType.value}','${name}',code)`
  );
}

// vue?svelte?ts?
export async function updateFile(name: string) {
  const file = store.activeFile;
  const preMountDOMId = getMountID();

  if (name.endsWith('.vue')) {
    contentType.value = contentType.value !== 'style' ? 'style' : 'script';
  }

  if (contentType.value !== 'style') {
    getProxy().eval(
      `const root_elem = document.getElementById("${getMountID()}");
      if(root_elem){document.body.removeChild(root_elem);const el = document.createElement("div");
      el.setAttribute('id', '${preMountDOMId}');document.body.appendChild(el);}`
    );
  }

  function scriptUpdate() {
    const modules = compileModules();
    modules.forEach((mod) => {
      const [filename, js] = mod.split(':_:');
      update(filename, js.replace(filename + ':_:', ''), 'script');
    });
  }

  // when only vue'style be modified
  await compileFile(file, contentType.value);
  switch (contentType.value) {
    case 'style':
      update(name, file.compiled.css);
      break;

    case 'script':
      scriptUpdate();
      break;
    default:
      {
        await getProxy().eval(
          `document.querySelector('body').innerHTML=${JSON.stringify(
            store.files[name].compiled.html
          )}`
        );
        scriptUpdate();
      }
      break;
  }
  // await getProxy().eval([
  //  `if (window.__app__) {
  //     window.__app__.unmount()
  //    document.getElementById('app').innerHTML = ''
  //  }`,
  //   ...modules
  // ]);
}
