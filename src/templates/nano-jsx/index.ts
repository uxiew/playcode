import { Template } from '..';
import app from './App.tsx?raw';
import main from './main.tsx?raw';

export default <Template>{
  homepage: 'https://nanojsx.io/',
  title: 'nano-jsx',
  icon: 'nano-jsx',
  configs: {
    babel: { importSource: 'nano-jsx' }
  },
  packages: [
    {
      name: 'nano-jsx',
      version: '0.0.34',
      path: '/esm/index.js'
    },
    {
      name: 'nano-jsx/jsx-runtime',
      version: '0.0.34',
      url: ' https://cdn.jsdelivr.net/npm/nano-jsx/esm/jsx-runtime/index.js'
    }
  ],
  files: [
    {
      name: 'main',
      value: main,
      active: !0,
      extension: '.tsx'
    },
    {
      name: 'App',
      value: app,
      active: !1,
      extension: '.tsx'
    }
  ]
};
