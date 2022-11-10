import { getProxy } from './preview';
import { compileModules, compileFile, getMountID } from '../useCompiler';
import { orchestrator as store, sourceType } from '~/orchestrator';
import { Ref, ref } from 'vue';

export let contentType: Ref<sourceType> = ref('script'); // 默认类型

export async function updatePkgs(pkg: string) {
  // const modules = compileModules();
}

function update(name: string, content: string, type?: string) {
  console.log('----update----', contentType.value);
  return getProxy().eval(
    `const code = ${JSON.stringify(content)};
     __update__('${type || contentType.value}','${name}',code)`
  );
}

// vue?svelte?ts?
export async function updateFile(name: string) {
  const file = store.files[name];

  if (name.endsWith('.vue')) {
    contentType.value = contentType.value === 'style' ? 'style' : 'script';
  }

  // TODO 只有 没有 app 或者 root id 的情况
  if (contentType.value !== 'style') {
    getProxy().eval(
      `const root_elem = document.getElementById("${getMountID()}");
      if(root_elem){
      document.body.removeChild(root_elem);const el = document.createElement("div");
      el.setAttribute('id', 'app');document.body.appendChild(el);}`
    );
  }

  // when only vue'style be modified
  await compileFile(file, contentType.value);
  switch (contentType.value) {
    case 'style':
      update(name, file.compiled.css);
      break;

    case 'script':
      {
        const modules = compileModules();
        console.log('modules', modules);
        modules.forEach((mod) => {
          const [filename, js] = mod.split(':_:');
          update(filename, js.replace(filename + ':_:', ''), 'script');
        });
      }
      break;
    default:
      {
        await getProxy().eval(
          `document.querySelector('body').innerHTML=${JSON.stringify(
            store.files[name].compiled.html
          )}`
        );
        const modules = compileModules();
        console.log('modules', modules);
        modules.forEach((mod) => {
          const [filename, js] = mod.split(':_:');
          update(filename, js.replace(filename + ':_:', ''), 'script');
        });
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
