import { defineTemplate } from '..';
import app from './App.vue?raw';
import coordinate from './Coordinate.vue?raw';
import main from './main.ts?raw';

export default defineTemplate({
  homepage: 'https://vueuse.org/',
  title: 'Vueuse',
  icon: 'vueuse',
  configs: {
    windicss: true
  },
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
      description:
        'Vue Demi (half in French) is a developing utility allows you to write Universal Vue Libraries for Vue 2 & 3',
      source: 'unpkg',
      path: '/lib/index.mjs'
    },
    {
      name: '@vueuse/shared',
      version: '9.0.0',
      description: 'Shared VueUse utilities.',
      source: 'unpkg',
      path: '/index.mjs'
    },
    {
      name: '@vueuse/core',
      version: '9.0.0',
      description: 'Collection of essential Vue Composition Utilities',
      source: 'unpkg',
      path: '/index.mjs'
    }
  ],
  files: [
    {
      name: 'main',
      value: main,
      active: !1,
      extension: '.ts'
    },
    {
      name: 'App',
      value: app,
      active: !0,
      extension: '.vue'
    },
    {
      name: 'Coordinate',
      value: coordinate,
      active: !1,
      extension: '.vue'
    }
  ]
});
