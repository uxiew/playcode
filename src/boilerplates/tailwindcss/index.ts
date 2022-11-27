import index from './index.html?raw';
import style from './style.css?inline';

export default {
  title: 'Tailwind CSS',
  homepage: 'https://tailwindcss.com/',
  icon: 'tailwindcss',
  packages: [],
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
