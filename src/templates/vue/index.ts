import app from './App.vue?raw';
import main from './main.ts?raw';
import style from './style.css?inline';

export default {
  title: 'Vue Playground',
  icon: 'vue',
  packages: [
    {
      name: 'vue',
      version: '3.2.33',
      active: !1,
      url: 'https://unpkg.com/@vue/runtime-dom@3.2.41/dist/runtime-dom.esm-browser.js'
    },
    {
      name: 'vue-demi',
      version: '0.13.11',
      source: 'unpkg',
      description:
        'Vue Demi (half in French) is a developing utility allows you to write Universal Vue Libraries for Vue 2 & 3',
      url: 'https://unpkg.com/vue-demi/lib/index.mjs'
    },
    {
      name: '@vueuse/shared',
      version: '9.0.0',
      source: 'unpkg',
      description: 'Shared VueUse utilities.',
      url: 'https://unpkg.com/@vueuse/shared@9.0.0/index.mjs'
    },
    {
      name: '@vueuse/core',
      version: '9.0.0',
      source: 'unpkg',
      description: 'Collection of essential Vue Composition Utilities',
      url: 'https://unpkg.com/@vueuse/core@9.0.0/index.mjs'
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
      extension: '.js'
    },
    {
      name: 'package',
      extension: '.json',
      value: '{\n  "dependencies": {\n    "vue": "3.2.33"\n  }\n}',
      active: !1,
      closed: !0
    }
  ]
};
