import index from './index.html?raw';
import main from './main.js?raw';
import demo from './demo.ts?raw';
import style from './style.scss?inline';

export default {
  title: 'JavaScript',
  homepage: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  icon: 'javascript',
  configs: {},
  packages: [
    {
      name: 'jquery',
      version: '3.6.1',
      active: !0,
      url: 'https://esm.sh/jquery@3.6.1'
    }
  ],
  files: [
    {
      name: 'main',
      value: main,
      active: !0,
      extension: '.js'
    },
    {
      name: 'index',
      value: index,
      active: !1,
      extension: '.html'
    },
    {
      name: 'demo',
      value: demo,
      active: !1,
      extension: '.ts'
    },
    {
      name: 'style',
      value: style,
      active: !1,
      extension: '.scss'
    }
  ]
};
