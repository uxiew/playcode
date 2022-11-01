import app from './App.vue?raw';
import main from './main.ts?raw';
import style from './style.css?inline';

export default {
  title: 'Element Plus Playground',
  icon: 'vue_element',
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
      pkg: 'element-plus/',
      version: '2.2.19',
      path: '/',
      source: 'jsdelivr'
    },
    {
      name: '@vue/shared',
      path: '/dist/shared.esm-bundler.js',
      source: 'jsdelivr'
    },
    {
      name: '@element-plus/icons-vue',
      path: '/dist/index.min.mjs',
      source: 'jsdelivr'
    },
    {
      name: '@popperjs/core',
      version: '2.11.5',
      path: '/@popperjs/core@2.11.5',
      source: 'jsdelivr'
    }
  ],
  files: [
    {
      name: 'main',
      value: main,
      active: !1,
      extension: '.js'
    },
    {
      name: 'App',
      value: app,
      active: !0,
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
      name: 'package',
      extension: '.json',
      value:
        '{\n  "dependencies": {\n    "vue": "3.2.33",\n    "element-plus": "2.1.11",\n    "@popperjs/core": "2.11.5"\n  }\n}',
      active: !1,
      closed: !0
    }
  ]
};
