import { setupMonaco } from '~/monaco';
import type { editor as Editor } from 'monaco-editor';
import { orchestrator as store, sourceType } from '~/orchestrator';

const editorStatus = new Map();

function getUri(name: string, type: string) {
  return new window.monaco.Uri().with({
    path: store.type + '/' + name,
    scheme: 'playcode',
    fragment: type
  });
}

function getLang(name: string, sourceType: sourceType) {
  let type = name.split('.').slice(-1)[0];
  const config: {
    [key: string]: string;
  } = {
    script: 'typescript',
    template: 'html',
    style: 'scss',
    js: 'javascript',
    ts: 'typescript',
    sass: 'scss',
    jsx: 'javascript',
    tsx: 'typescript',
    rs: 'rust',
    dart: 'dart'
  };

  return config[type] || config[sourceType];
}

export function saveModelStatus() {
  const preState = editorStatus.get('preState');
  if (preState) {
    const { name, type } = preState;
    const editor = getEditorByType(type) as Editor.ICodeEditor;
    editor && editorStatus.set(name, editor.saveViewState());
  }

  return editorStatus;
}

export function restoreModelStatus(name: string, type: sourceType) {
  editorStatus.set('preState', {
    name,
    type
  });

  const editor = getEditorByType(type) as Editor.ICodeEditor;
  const preState = editorStatus.get(name);

  preState && editor?.restoreViewState(preState);
  // setTimeout 防止新建文件回车时导致出现多一行
  setTimeout(() => {
    // 聚焦编辑器
    editor?.focus();
  }, 100);
}

// 设置主题
export function setTheme() {
  // @ts-expect-error
  monaco.editor.defineTheme('vitesse-dark', darktheme);
  // @ts-expect-error
  monaco.editor.defineTheme('vitesse-light', lightTheme);
}

/***
 * 清除所有存储
 */
export function clearEditorState() {
  // 取消事件监听
  editorStatus.get('listener')?.dispose();
  editorStatus.clear();

  (getEditorByType() as readonly Editor.ICodeEditor[])?.forEach((editor) =>
    editor.dispose()
  );
  window.monaco?.editor.getModels().forEach((model) => model.dispose());
}

/**
 * 获取 相同类型的 editor, type 为空获取所有实例化的editors
 */
export function getEditorByType(type?: sourceType) {
  // model 是否存在
  const editors = window.monaco?.editor.getEditors();
  return type
    ? editors.find((editor) => editor.getModel()?.uri.fragment === type)
    : editors;
}

/**
 * 获取 model
 */
export function getModel(name: string, type: sourceType = 'script') {
  // model 是否存在
  return window.monaco.editor.getModel(getUri(name, type));
}

/**
 * 获取 sourceType 的 model
 */
export function createOrUpdateEditor(
  el: HTMLElement,
  name: string,
  type: sourceType,
  options: any
) {
  // model 是否存在
  const allEditors = getEditorByType()! as readonly Editor.ICodeEditor[];

  // 🐻 相同的 Editor 不会被卸载，所以不能再次挂载，否则会有错误提示。（可以通过 vue3 key-changing 来促使组件刷新）
  const editor = getEditorByType(type)! as Editor.ICodeEditor;

  if (editor?.getContainerDomNode() !== el) {
    // 销毁之前挂载在之前被vue3切换销毁的 dom 上的 editor
    allEditors.forEach((editor) => {
      editor.getModel()?.uri.fragment === type && editor.dispose();
    });
    return window.monaco.editor.create(el, options);
  } else {
    return editor;
  }
}

/**
 * 创建 Model 或者恢复 model 撤销
 *
 * @param {string}  name 文件名
 * @param {string}  code 文件内容
 * @param {sourceType}  fragment 内容类型
 */
export async function createOrUpdateModel(
  name: string,
  sourceType: sourceType = 'script',
  code: string = ''
): Promise<Editor.ITextModel> {
  const monaco = window.monaco || (await setupMonaco()).monaco;
  let model = getModel(name, sourceType);

  if (!model) {
    model = monaco.editor.createModel(
      code,
      getLang(name, sourceType),
      getUri(name, sourceType)
    );
  }

  return model!;
}
