import index from './index.html?raw';
import main from './main.ts?raw';
import style from './style.css?inline';

export default {
  title: 'Canvas',
  homepage: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
  icon: 'canvas',
  packages: [],
  files: [
    {
      name: 'main',
      value: main,
      active: !0,
      extension: '.ts'
    },
    {
      name: 'index',
      value: index,
      active: !1,
      extension: '.html'
    },
    {
      name: 'style',
      value: style,
      active: !1,
      extension: '.css'
    }
  ]
};
