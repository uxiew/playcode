import { Template } from '..';
import app from './App.vue?raw';
import main from './main.ts?raw';
import style from './style.css?inline';

export default <Template>{
  title: 'Vue',
  homepage: 'https://cn.vuejs.org/api/',
  icon: 'vue',
  configs: {},
  packages: [
    {
      name: 'vue',
      version: '3.2.33',
      active: !1,
      url: 'https://unpkg.com/@vue/runtime-dom@3.2.41/dist/runtime-dom.esm-browser.js'
    }
  ],
  files: [
    {
      name: 'App',
      value: app,
      active: !1,
      extension: '.vue'
    },
    {
      name: 'style',
      value: style,
      active: !1,
      closed: !0,
      extension: '.css'
    },
    {
      name: 'main',
      value: main,
      active: !0,
      extension: '.ts'
    }
  ]
};
