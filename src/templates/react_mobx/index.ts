import app from './App.tsx?raw';
import main from './main.tsx?raw';
import counterStore from './counterStore.ts?raw';
import style from './style.css?inline';

export default {
  title: 'React Mobx',
  homepage: 'https://cn.mobx.js.org/',
  icon: 'react_mobx',
  packages: [
    {
      name: 'react',
      version: '18.0.0'
    },
    {
      name: 'react-dom',
      version: '18.0.0'
    },
    {
      name: 'mobx',
      version: '6.6.1'
    },
    {
      name: 'mobx-react',
      version: '7.5.2'
    }
  ],
  files: [
    {
      name: 'App',
      value: app,
      active: !0,
      closed: !1,
      extension: '.tsx'
    },
    {
      name: 'style',
      value: style,
      active: !1,
      closed: !0,
      extension: '.css'
    },
    {
      name: 'counterStore',
      value: counterStore,
      active: !1,
      closed: !1,
      extension: '.ts'
    },
    {
      name: 'main',
      value: main,
      active: !1,
      closed: !0,
      extension: '.tsx'
    }
  ]
};
