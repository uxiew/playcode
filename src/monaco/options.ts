import type { editor as Editor, IDisposable } from 'monaco-editor';

// 编辑器设置
export const monacoOptions: Editor.IStandaloneEditorConstructionOptions = {
  wordWrap: 'on',
  fontSize: 14,
  tabSize: 4,
  insertSpaces: true,
  autoClosingQuotes: 'always',
  detectIndentation: false,
  folding: false,
  automaticLayout: true,
  theme: 'vitesse-dark',
  minimap: {
    enabled: false
  },

  contextmenu: true, // 右键菜单
  cursorStyle: 'line', // 光标样式
  lineDecorationsWidth: 10, // 行号与实际内容间的距离
  lineNumbers: 'on', // 是否启动行号
  lineNumbersMinChars: 4,
  mouseStyle: 'default',
  quickSuggestions: false, // 智能提示
  renderLineHighlight: 'line', // 选中行外部边框
  scrollbar: {
    arrowSize: 5,
    horizontal: 'hidden',
    useShadows: false,
    vertical: 'visible',
    verticalScrollbarSize: 5
  },

  lineHeight: 20,
  stopRenderingLineAfter: -1
};
