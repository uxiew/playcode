import { getProxy } from './preview';
import { compileModules, compileFile, getMountID } from '~/logic/useCompiler';
import { orchestrator as store, sourceType } from '~/orchestrator';
import { Ref, ref } from 'vue';
import { settings } from '~/configs/settings';

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
  let iSrcdoc = getProxy().iframe.srcdoc;

  switch (tag) {
    case 'script':
      {
        iSrcdoc = iSrcdoc.replace(
          `}}</script>`,
          `}}</script>\n<script type="module" id=${name}></script>`
        );
      }
      break;
    case 'style':
      {
        iSrcdoc = iSrcdoc.replace(
          `</style>`,
          `</style><style id=${name}></style>`
        );
      }
      break;
    default:
      break;
  }

  getProxy().iframe.srcdoc = iSrcdoc;

  delete store.activeFile.newly;
}

function update(name: string, content: string, type?: sourceType) {
  console.log('--😄--update----', name, contentType.value);
  return getProxy().eval(
    `const code = ${JSON.stringify(content)};
     __update__('${type || contentType.value}','${name}',code)`
  );
}

/**
 * @description 这里更新的逻辑如果细分就会比较复杂；
 * TODO 简单的方法是更新所有js\css\html
 */
export async function updateFile(name: string) {
  // 当前文件
  const file = store.activeFile;
  const preMountDOMId = getMountID();

  if (name.endsWith('.vue')) {
    contentType.value = contentType.value === 'style' ? 'style' : 'script';
  }

  if (contentType.value !== 'style') {
    await getProxy().eval(
      `const root_elem = document.getElementById("${
        getMountID() || ''
      }");console.log(root_elem)
      if(root_elem){\ndocument.body.removeChild(root_elem);const el = document.createElement("div");
      el.setAttribute('id', '${preMountDOMId}');document.body.appendChild(el);\n}`
    );
  }

  async function scriptUpdate() {
    const modules = compileModules();
    for (const mod of modules) {
      const [filename, js] = mod.split(':_:');
      await update(filename, js.replace(filename + ':_:', ''), 'script');
    }
  }

  // 重新编译文件！
  await compileFile(file, contentType.value);

  switch (contentType.value) {
    case 'style':
      update(name, file.compiled.css);
      break;

    case 'script':
      {
        // 对于一些 css 框架，需要重新刷新css
        if (settings.windicss && file.compiled.css)
          update(name, file.compiled.css, 'style');
        scriptUpdate();
      }
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
