import { reactive, ref, watch } from 'vue';
import { orchestrator as store } from '~/orchestrator';
import { PreviewProxy } from './PreviewProxy';
import { updateFile } from './update';

export interface PreviewState {
  // ready for run!
  ready: boolean;
  // loaded: boolean;
}

let proxy: PreviewProxy;

const runtimeError = ref();
const runtimeWarning = ref();
watch([runtimeError, runtimeWarning], () => {
  store.runtimeErrors = [runtimeError.value, runtimeWarning.value].filter(
    (x) => x
  );
});

export const state: PreviewState = reactive({
  // ready for run!
  ready: false
  // loaded: false
});

export const getProxy = () => proxy;

export function initProxy(sandbox: HTMLIFrameElement) {
  proxy = new PreviewProxy(sandbox, {
    on_fetch_progress: (progress: any) => {
      // pending_imports = progress;
    },
    on_error: (event: any) => {
      const msg =
        event.value instanceof Error ? event.value.message : event.value;
      if (
        msg.includes('Failed to resolve module specifier') ||
        msg.includes('Error resolving module specifier')
      ) {
        runtimeError.value = `${msg.replace(
          /\. Relative references must.*$/,
          ''
        )}.\nTip: add an "import-map.json" file to specify import paths for dependencies.`;
      } else {
        runtimeError.value = event.value;
      }
    },
    on_unhandled_rejection: (event: any) => {
      let error = event.value;
      if (typeof error === 'string') error = { message: error };

      runtimeError.value = `Uncaught (in promise): ${error.message}`;
    },
    on_console: (log: any) => {
      if (log.level === 'error') {
        if (log.args[0] instanceof Error)
          runtimeError.value = log.args[0].message;
        else runtimeError.value = log.args[0];
      } else if (log.level === 'warn') {
        if (log.args[0].toString().includes('[Vue warn]')) {
          runtimeWarning.value = log.args
            .join('')
            .replace(/\[Vue warn\]:/, '')
            .trim();
        }
      }
    },
    on_console_group: (action: any) => {
      // group_logs(action.label, false);
    },
    on_console_group_end: () => {
      // ungroup_logs();
    },
    on_console_group_collapsed: (action: any) => {
      // group_logs(action.label, true);
    }
  });

  return proxy;
}

/**
 * 当内容更改时，进行视图的更新
 */
export function updatePreview() {
  // console.clear()
  runtimeError.value = null;
  runtimeWarning.value = null;
  // newFiles: Record<string, OrchestratorFile>,
  // oldFiles: Record<string, OrchestratorFile>

  try {
    if (!store.activeFile) return;
    const { filename, code } = store.activeFile;
    // eslint-disable-next-line no-console

    console.log(`【当内容更改时，进行视图的更新】✅\n`, filename, state);
    // await proxy.eval([
    //   `
    //   //   if (window.__app__) {
    //     //   window.__app__.unmount()
    //     //   documeupdatent.getElementById('app').innerHTML = ''
    //     // }`
    // ]);

    updateFile(filename);
    // else _fullLoad();
  } catch (e: any) {
    runtimeError.value = e.message;
  }
}

// export const update = debounce(updatePreview, 500);
/**
 * 全部更新
 * TODO  通过特殊字符分割 文件名和内容，然后去加载对应内容体
 */
// async function _fullLoad() {
//   const modules = compileModules();
//   const styles = loadStyles();
//   await proxy.eval([
//     ...styles,
//     ...modules
//   ]);
// }
