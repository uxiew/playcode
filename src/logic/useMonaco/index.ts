import { watch, Ref, unref, ref, watchEffect } from 'vue';
import { until, createEventHook, tryOnUnmounted } from '@vueuse/core';

import darktheme from 'theme-vitesse/themes/vitesse-dark.json';
import lightTheme from 'theme-vitesse/themes/vitesse-light.json';

import type { editor as Editor } from 'monaco-editor';

import { editorPlugins } from '~/monaco/plugins/editor';
import { monacoOptions } from '~/monaco/options';
import { setupMonaco } from '~/monaco';
import { isDark } from '~/logic/dark';
import {
  createOrUpdateEditor,
  getModel,
  restoreModelStatus,
  saveModelStatus
} from '~/monaco/utils';
import { orchestrator as store, sourceType } from '~/orchestrator';

/***
 * 组件的卸载 会导致该方法重复调用
 */
export function useMonaco(
  target: Ref,
  options: {
    language: string;
    type: sourceType;
  }
) {
  const changeEventHook = createEventHook<string>();
  const isSetup = ref(false);
  let editor!: Editor.ICodeEditor;

  const setContent = async (content: string) => {
    await until(isSetup).toBeTruthy();
    if (editor) editor.setValue(content);
  };

  const getEditor = async () => {
    await until(isSetup).toBeTruthy();
    return editor;
  };

  const init = async () => {
    const { monaco } = await setupMonaco();
    // @ts-expect-error
    monaco.editor.defineTheme('vitesse-dark', darktheme);
    // @ts-expect-error
    monaco.editor.defineTheme('vitesse-light', lightTheme);

    watch(
      () => store.activeFilename,
      async (name) => {
        const el = unref(target);
        if (!el) return;

        // const { ext, script, template, style } = store.activeFile;
        // 状态存储
        const editorStatus = saveModelStatus();
        editor = createOrUpdateEditor(el, name, options.type, monacoOptions);
        // 切换到新的model
        editor.setModel(getModel(name, options.type));
        restoreModelStatus(name, options.type);

        watchEffect(() => {
          if (isDark.value) monaco.editor.setTheme('vitesse-dark');
          else monaco.editor.setTheme('vitesse-light');
        });

        const plugins = editorPlugins.filter(
          ({ language }) => language === options.language
        );

        const listener = editor.getModel()?.onDidChangeContent((ev) => {
          changeEventHook.trigger(editor.getValue());
          plugins.forEach(({ onContentChanged }) => onContentChanged(editor));
        });

        // if (editorStatus.get('listener')) {
        //   // 取消上一次的监听
        //   editorStatus.get('listener').dispose();
        // }
        // editorStatus.set('listener', listener);
        isSetup.value = true;
      },
      {
        flush: 'post',
        immediate: true
      }
    );
  };

  init();
  tryOnUnmounted(() => stop());

  return {
    onChange: changeEventHook.on,
    setContent,
    getEditor
  };
}
