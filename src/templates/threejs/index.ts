import { Template } from '..';
import main from './main.js?raw';
import style from './style.css?inline';

export default <Template>{
  homepage: 'https://threejs.org/',
  title: 'THREE.js',
  icon: 'threejs',
  packages: [
    {
      name: 'three',
      version: '0.139.2',
      path: '/build/three.module.js'
    }
  ],
  files: [
    {
      name: 'style',
      value: style,
      active: !1,
      extension: '.css'
    },
    {
      name: 'main',
      value: main,
      active: !0,
      extension: '.js'
    }
  ]
};
