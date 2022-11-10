import index from './index.html?raw';
import style from './style.css?inline';

export default {
  title: 'Bulma',
  homepage: 'https://bulma.io/',
  icon: 'bulma',
  packages: [
    {
      name: 'bulma',
      version: '0.9.3'
    }
  ],
  files: [
    {
      name: 'index',
      value: index,
      active: !0,
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
