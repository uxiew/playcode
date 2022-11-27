import app from './App.jsx?raw';
import main from './main.jsx?raw';
import style from './style.css?inline';

export default {
  title: 'React MUI',
  homepage: 'https://mui.com/zh/',
  icon: 'react_mui',
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
      name: '@mui/material',
      version: '5.6.2'
    },
    {
      name: '@emotion/react',
      version: '11.9.0'
    },
    {
      name: '@emotion/styled',
      version: '11.8.1'
    }
  ],
  files: [
    {
      name: 'main',
      value: main,
      active: !1,
      hidden: !1,
      extension: '.jsx'
    },
    {
      name: 'App',
      value: app,
      active: !0,
      hidden: !1,
      extension: '.jsx'
    },
    {
      name: 'style',
      value: style,
      active: !1,
      hidden: !0,
      extension: '.css'
    },
    {
      name: 'package',
      extension: '.json',
      value:
        '{\n  "dependencies": {\n    "react": "18.0.0",\n    "react-dom": "18.0.0",\n    "@mui/material": "5.6.2",\n    "@emotion/react": "11.9.0",\n    "@emotion/styled": "11.8.1"\n  }\n}',
      active: !1,
      hidden: !0
    }
  ]
};
