import { defineTemplate } from '..';
import app from './App.tsx?raw';
import main from './main.tsx?raw';
import style from './style.css?inline';

export default defineTemplate({
  title: 'React TypeScript Hooks',
  homepage: 'https://',
  icon: 'react',
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
      name: 'main',
      value: main,
      active: !1,
      closed: !1,
      extension: '.tsx'
    }
  ]
});
