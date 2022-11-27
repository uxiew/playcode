import app from './App.svelte?raw';
import button from './Button.svelte?raw';
import main from './main.js?raw';
import style from './style.css?inline';

export default {
  title: 'Svelte',
  homepage: 'https://svelte.dev/tutorial',
  icon: 'svelte',
  packages: [
    {
      name: 'svelte',
      version: '3.49.0'
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
      extension: '.svelte'
    },
    {
      name: 'style',
      value: style,
      active: !1,
      hidden: !0,
      extension: '.css'
    },
    {
      name: 'Button',
      value: button,
      active: !1,
      extension: '.svelte'
    }
  ]
};
