import app from './App.jsx?raw';
import main from './main.jsx?raw';
import Counter from './Counter.jsx?raw';
import counterSlice from './counterSlice.ts?raw';
import store from './store.ts?raw';
import style from './style.css?inline';

export default {
  title: 'React Redux Toolkit',
  homepage: 'https://redux.js.org/',
  icon: 'react_redux_toolkit',
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
      name: 'react-redux',
      version: '8.0.2'
    },
    {
      name: '@reduxjs/toolkit',
      version: '1.8.3'
    }
  ],
  files: [
    {
      name: 'main',
      value: main,
      active: !0,
      hidden: !1,
      extension: '.tsx'
    },
    {
      name: 'App',
      value: app,
      active: !1,
      hidden: !1,
      extension: '.tsx'
    },
    {
      name: 'store',
      value: store,
      active: !1,
      hidden: !1,
      extension: '.ts'
    },
    {
      name: 'Counter',
      value: Counter,
      active: !1,
      hidden: !1,
      extension: '.tsx'
    },
    {
      name: 'counterSlice',
      value: counterSlice,
      active: !1,
      hidden: !1,
      extension: '.ts'
    },
    {
      name: 'style',
      value: style,
      active: !1,
      hidden: !0,
      extension: '.css'
    }
  ]
};
