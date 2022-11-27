import { defineTemplate } from '..';
import app from './App.vue?raw';
import main from './main.ts?raw';
import style from './style.css?inline';

export default defineTemplate({
  title: 'Element Plus',
  homepage: '',
  icon: 'vue_element',
  configs: {},
  packages: [
    {
      name: 'vue',
      version: '3.2.41',
      url: 'https://cdn.jsdelivr.net/npm/@vue/runtime-dom@3.2.41/dist/runtime-dom.esm-browser.js'
    },
    {
      name: 'element-plus',
      version: '2.2.19',
      path: '/dist/index.full.min.mjs',
      source: 'jsdelivr'
    },
    {
      name: '@vue/shared',
      path: '/dist/shared.esm-bundler.js'
    },
    {
      name: '@element-plus/icons-vue',
      path: '/dist/index.min.mjs'
    },
    {
      name: '@popperjs/core',
      version: '2.11.5',
      path: '/@popperjs/core@2.11.5'
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
      name: 'App',
      value: app,
      active: !1,
      extension: '.vue'
    },
    {
      name: 'style',
      value: style,
      active: !1,
      hidden: !0,
      extension: '.css'
    }
  ]
});
