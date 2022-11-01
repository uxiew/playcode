import app from './App.tsx?raw';
import main from './main.tsx?raw';
import style from './style.css?inline';

export default {
  title: 'React TypeScript Playground Hooks',
  icon: 'react',
  packages: [
    {
      name: 'react',
      version: '18.2.0',
      path: '/react.development.js'
    },
    {
      name: 'react-dom',
      version: '18.0.0'
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
      name: 'index',
      value: main,
      active: !1,
      closed: !1,
      extension: '.tsx'
    },
    {
      name: 'package',
      extension: '.json',
      value:
        '{\n  "dependencies": {\n    "react": "18.0.0",\n    "react-dom": "18.0.0"\n  }\n}',
      active: !1,
      closed: !0
    }
  ]
};
