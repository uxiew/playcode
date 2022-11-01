import main from './main.js?raw';
import style from './style.css?inline';

export default {
  title: 'THREE.js Playground',
  icon: 'threejs',
  packages: [
    {
      name: 'three',
      version: '0.139.2'
    }
  ],
  files: [
    {
      name: 'index',
      value:
        '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link rel="stylesheet" href="src/style.css">\n  </head>\n  <body>\n\n    <script src="src/script.js"></script>\n  </body>\n</html>',
      active: !1,
      extension: '.html'
    },
    {
      name: 'style',
      value: style,
      active: !1,
      extension: '.css'
    },
    {
      name: 'main',
      value: main,
      active: !0,
      extension: '.js'
    },
    {
      name: 'package',
      value: '{\n  "dependencies": {\n    "three": "0.139.2"\n  }\n}',
      active: !1,
      closed: !0,
      extension: '.json'
    }
  ]
};
