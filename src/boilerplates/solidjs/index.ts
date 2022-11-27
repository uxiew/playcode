import { defineTemplate } from '..';
import main from './main.jsx?raw';
import style from './style.css?inline';

export default defineTemplate({
  title: 'SolidJS',
  homepage: 'https://www.solidjs.com/',
  icon: 'solidjs',
  packages: [
    {
      name: 'solidjs',
      version: '1.1.2'
    }
  ],
  files: [
    {
      name: 'main',
      value: main,
      active: !0,
      extension: '.jsx'
    },
    {
      name: 'style',
      value: style,
      active: !1,
      extension: '.css'
    }
  ]
});
