import index from './index.html?raw';
import style from './style.scss?inline';

export default {
  title: 'SASS/SCSS Playground',
  icon: 'scss',
  packages: [],
  files: [
    {
      name: 'style',
      value: style,
      active: !0,
      extension: '.scss'
    },
    {
      name: 'index',
      value: index,
      active: !1,
      extension: '.html'
    }
  ]
};
