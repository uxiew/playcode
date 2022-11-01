import app from './App.svelte?raw';
import button from './Button.svelte?raw';
import main from './main.js?raw';
import style from './style.css?inline';

export default {
  title: 'Svelte Playground',
  icon: 'svelte',
  packages: [
    {
      name: 'svelte',
      version: '3.49.0'
    }
  ],
  files: [
    {
      name: 'App',
      value: app,
      active: !0,
      extension: '.svelte'
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
      active: !1,
      extension: '.js'
    },
    {
      name: 'Button',
      value: button,
      active: !1,
      extension: '.svelte'
    },
    {
      name: 'package',
      extension: '.json',
      value: '{\n  "dependencies": {\n    "svelte": "3.49.0"\n  }\n}',
      active: !1,
      closed: !0
    }
  ]
};
