import { defineTemplate } from '..';
import app from './App.jsx?raw';
import main from './main.jsx?raw';
import style from './style.css?inline';

export default defineTemplate({
  title: 'React',
  icon: 'react',
  homepage: '',
  configs: {},
  packages: [
    {
      name: 'react',
      version: '18.2.0',
      source: 'esm'
    },
    {
      name: 'react/jsx-runtime',
      version: '18.2.0',
      url: 'https://esm.sh/react/jsx-runtime'
    },
    {
      name: 'react-dom/client',
      version: '18.2.0',
      url: 'https://esm.sh/react-dom/client'
    },
    {
      name: 'react-dom',
      version: '18.2.0',
      source: 'esm'
    }
  ],
  files: [
    {
      name: 'App',
      value: app,
      active: !0,
      closed: !1,
      extension: '.jsx'
    },
    {
      name: 'main',
      value: main,
      active: !1,
      closed: !1,
      extension: '.jsx'
    },
    {
      name: 'style',
      value: style,
      active: !1,
      closed: !0,
      extension: '.css'
    }
  ]
});
