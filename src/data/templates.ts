//  from playcode.io

import type { Package } from '~/utils/pkg';

export type KeyList = keyof typeof templateList;

export interface Template {
  title: string;
  icon: string;
  packages: Package[];
  files: {
    name: string;
    value: string;
    active: boolean;
    closed: boolean;
    extension: string;
  }[];
}

export const templateList = {
  bootstrap: {
    title: 'Bootstrap Playground',
    icon: 'bootstrap',
    packages: [
      {
        name: 'bootstrap',
        version: '5.1.3'
      },
      {
        name: '@popperjs/core',
        version: '2.11.2'
      },
      {
        name: 'jquery',
        version: '3.6.0'
      }
    ],
    files: [
      {
        name: 'package',
        value:
          '{\n  "dependencies": {\n    "bootstrap": "5.1.3",\n    "@popperjs/core": "2.11.2",\n    "jquery": "3.6.0"\n  }\n}',
        active: !1,
        closed: !0,
        extension: '.json'
      },
      {
        name: 'index',
        value:
          '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link rel="stylesheet" href="src/style.css">\n  </head>\n  <body>\n    <div class="d-flex h-100">\n      <button class="btn btn-warning m-auto">\n        Click me\n      </button>\n    </div>\n\n    <script src="src/script.js"></script>\n  </body>\n</html>',
        active: !0,
        extension: '.html'
      },
      {
        name: 'style',
        value: 'body {\n  padding: 0 24px;\n  margin: 0;\n  height: 100vh;\n}',
        active: !1,
        extension: '.css'
      },
      {
        name: 'script',
        value:
          "import 'bootstrap'\nimport 'bootstrap/dist/css/bootstrap.css'\nimport $ from 'jquery'\n\n$('button')\n  .html('Click me') // 1. Try edit it...\n  .on('click', () => console.log('Hi friend!'))\n\nconsole.log('App started')",
        active: !1,
        extension: '.js'
      }
    ]
  },
  bulma: {
    title: 'Bulma Playground',
    icon: 'bulma',
    packages: [
      {
        name: 'bulma',
        version: '0.9.3'
      }
    ],
    files: [
      {
        name: 'package',
        value: '{\n  "dependencies": {\n    "bulma": "0.9.3"\n  }\n}',
        active: !1,
        closed: !0,
        extension: '.json'
      },
      {
        name: 'index',
        value:
          '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link rel="stylesheet" href="src/style.css">\n  </head>\n  <body>\n    <section class="section">\n      <div class="container">\n        <h1 class="title">\n          Hello World\n        </h1>\n        <p class="subtitle">My first website with <strong>Bulma</strong>! Try edit me.</p>\n      </div>\n    </section>\n\n    <script src="src/script.js"></script>\n  </body>\n</html>',
        active: !0,
        extension: '.html'
      },
      {
        name: 'style',
        value:
          "@import 'bulma/css/bulma.css';\n\nbody {\n  padding: 0 24px;\n  margin: 0;\n  height: 100vh;\n}",
        active: !1,
        extension: '.css'
      },
      {
        name: 'script',
        value: "console.log('Hello world')",
        active: !1,
        closed: !0,
        extension: '.js'
      }
    ]
  },
  canvas: {
    title: 'Canvas Playground',
    icon: 'canvas',
    packages: [],
    files: [
      {
        name: 'index',
        value:
          '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link rel="stylesheet" href="style.css">\n  </head>\n  <body>\n    <div class="container">\n      <canvas id="canvas"></canvas>\n    </div>\n\n    <script src="script.js"></script>\n  </body>\n</html>',
        active: !1,
        extension: '.html'
      },
      {
        name: 'style',
        value:
          'body {\n  background-color: white;\n  margin: 0;\n}\n\n.container {\n  margin: auto;\n  height: auto;\n}\n\n#canvas {\n  width: 100%;\n  height: 100%;\n  border: 1px solid black;\n}',
        active: !1,
        extension: '.css'
      },
      {
        name: 'script',
        value:
          "function draw() {\n  var canvas = document.getElementById('canvas');\n  if (canvas.getContext) {\n     var ctx = canvas.getContext('2d');\n\n    ctx.beginPath();\n    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle\n    ctx.moveTo(110, 75);\n    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)\n    ctx.moveTo(65, 65);\n    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye\n    ctx.moveTo(95, 65);\n    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye\n    ctx.stroke();\n  }\n}\n\ndraw()",
        active: !0,
        extension: '.js'
      },
      {
        name: 'package',
        value: '{\n  "dependencies": {\n  }\n}',
        active: !1,
        closed: !0,
        extension: '.json'
      }
    ]
  },
  css: {
    title: 'CSS Playground',
    icon: 'css',
    packages: [],
    files: [
      {
        name: 'index',
        value:
          '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link rel="stylesheet" href="src/style.css">\n  </head>\n  <body>\n    <h1>Hi friend, try change my color!</h1>\n\n    <script src="src/script.js"></script>\n  </body>\n</html>',
        active: !1,
        extension: '.html'
      },
      {
        name: 'style',
        value:
          'body {\n  background: #6e28d9;\n  padding: 0 24px;\n  color: white; /* Change my color to yellow */\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}',
        active: !0,
        extension: '.css'
      },
      {
        name: 'script',
        value: "console.log('it shows results as you type')",
        active: !1,
        closed: !0,
        extension: '.js'
      }
    ]
  },
  vue_element_plus: {
    title: 'Element Plus Playground',
    icon: 'vue_element',
    packages: [
      {
        name: 'vue',
        version: '3.2.41',
        url: 'https://cdn.jsdelivr.net/npm/@vue/runtime-dom@3.2.41/dist/runtime-dom.esm-browser.js'
      },
      {
        name: 'element-plus',
        version: '2.2.19',
        path: '/dist/index.full.min.mjs',
        source: 'jsdelivr'
      },
      {
        pkg: 'element-plus/',
        version: '2.2.19',
        path: '/',
        source: 'jsdelivr'
      },
      {
        name: '@vue/shared',
        path: '/dist/shared.esm-bundler.js',
        source: 'jsdelivr'
      },
      {
        name: '@element-plus/icons-vue',
        path: '/dist/index.min.mjs',
        source: 'jsdelivr'
      },
      {
        name: '@popperjs/core',
        version: '2.11.5',
        path: '/@popperjs/core@2.11.5',
        source: 'jsdelivr'
      }
    ],
    files: [
      {
        name: 'App',
        value:
          '<script setup>let count = 1\n\nconst props = {label: "name",children: "zones", }\n\nconst handleCheckChange = (data, checked, indeterminate) => {\nconsole.log(data, checked, indeterminate) }\n\nconst loadNode = (node, resolve) => {\nif (node.level === 0) {\nreturn resolve([{ name: "Root1" }, { name: "Root2" }])}\nif (node.level > 3) return resolve([])\n\nlet hasChild = false \nif (node.data.name === "region1") {\n hasChild = true } \nelse if (node.data.name === "region2") {\n hasChild = false \n} else {\n hasChild = Math.random() > 0.5 \n }\n\nsetTimeout(() => { \n  let data = [] \n  if (hasChild) {\n  data = [{ name: `zone${count++}` }, { name: `zone${count++}` }] \n   } else {\n  data = [] \n   }\n   resolve(data) \n  }, 500) \n }</script>\n\n<template>\n<el-tree :props="props" :load="loadNode" lazy show-checkbox @check-change="handleCheckChange"/></template>\n\n<style scoped>.card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.text {\n  font-size: 14px;\n}\n\n.item {\n  margin-bottom: 18px;\n}\n\n.box-card {\n  margin: 24px;\n  width: 480px;\n}\n</style>',
        active: !0,
        extension: '.vue'
      },
      {
        name: 'style',
        value: 'body {\n  padding: 0 24px;\n  margin: 0;\n  color: #fcbe24;\n}',
        active: !1,
        closed: !0,
        extension: '.css'
      },
      {
        name: 'main',
        value:
          "import { createApp } from 'vue'\nimport ElementPlus from 'element-plus'\nimport 'element-plus/dist/index.css'\nimport App from './App.vue'\n\nconst app = createApp(App)\n\napp.use(ElementPlus)\napp.mount('#app')",
        active: !1,
        extension: '.js'
      },
      {
        name: 'package',
        extension: '.json',
        value:
          '{\n  "dependencies": {\n    "vue": "3.2.33",\n    "element-plus": "2.1.11",\n    "@popperjs/core": "2.11.5"\n  }\n}',
        active: !1,
        closed: !0
      }
    ]
  },
  html: {
    title: 'HTML Playground',
    icon: 'html',
    files: [
      {
        name: 'index',
        value:
          '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link rel="stylesheet" href="src/style.css">\n  </head>\n  <body>\n    <h1 id="header"></h1>\n\n    <script src="src/script.js"></script>\n  </body>\n</html>',
        active: !1,
        closed: !1,
        extension: '.html'
      },
      {
        name: 'style',
        value:
          "body {\n  background: transparent; /* Make it white if you need */\n  color: #fcbe24;\n  padding: 0 24px;\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}",
        active: !1,
        extension: '.css'
      },
      {
        name: 'script',
        value:
          "const message = 'Hello world' // Try edit me\n\n// Update header text\ndocument.querySelector('#header').innerHTML = message\n\n// Log to console\nconsole.log(message)",
        active: !0,
        extension: '.js'
      }
    ],
    packages: []
  },
  jquery: {
    title: 'JQuery Playground',
    icon: 'jquery',
    packages: [
      {
        name: 'jquery',
        version: '3.6.0'
      }
    ],
    files: [
      {
        name: 'index',
        value:
          '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link rel="stylesheet" href="src/style.css">\n  </head>\n  <body>\n    <h1 id="header"></h1>\n\n    <script src="src/script.js"></script>\n  </body>\n</html>',
        active: !1,
        extension: '.html'
      },
      {
        name: 'style',
        value:
          'body {\n  background: #6e28d9;\n  color: white;\n  padding: 0 24px;\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}',
        active: !1,
        extension: '.css'
      },
      {
        name: 'script',
        value:
          "import $ from 'jquery'\n    \n$('#header').html('Hi friend, try edit me!')\n\nconsole.log('it shows results as you type')",
        active: !0,
        extension: '.js'
      },
      {
        name: 'package',
        value: '{\n  "dependencies": {\n    "jquery": "3.6.0"\n  }\n}',
        active: !1,
        closed: !0,
        extension: '.json'
      }
    ]
  },
  less: {
    title: 'LESS Playground',
    icon: 'less',
    packages: [],
    files: [
      {
        name: 'index',
        value:
          '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link rel="stylesheet" href="src/style.less">\n  </head>\n  <body>\n    <h1>Hi friend, try change my <span>color</span>!</h1>\n\n    <script src="src/script.js"></script>\n  </body>\n</html>',
        active: !1,
        extension: '.html'
      },
      {
        name: 'style',
        value:
          'body {\n  background: #6e28d9;\n  color: white; /* Change my color to yellow */\n  padding: 0 24px;\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  \n  span {\n    color: white; /* Change my color to red */\n  }\n}',
        active: !0,
        extension: '.less'
      },
      {
        name: 'script',
        value: "console.log('it shows results as you type')",
        active: !1,
        extension: '.js'
      }
    ]
  },
  lodash: {
    title: 'Lodash Playground',
    icon: 'lodash',
    previewClosed: true,
    packages: [
      {
        name: 'lodash',
        version: '4.17.21'
      }
    ],
    files: [
      {
        name: 'script',
        value:
          "import _ from 'lodash'\n    \nconst message = _.capitalize('hello world')\n\nconsole.log(message)",
        active: !0,
        extension: '.js'
      },
      {
        name: 'package',
        value: '{\n  "dependencies": {\n    "lodash": "4.17.21"\n  }\n}',
        active: !1,
        closed: !0,
        extension: '.json'
      }
    ]
  },
  react_mui: {
    title: 'React MUI Playground',
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
        name: 'package',
        extension: '.json',
        value:
          '{\n  "dependencies": {\n    "react": "18.0.0",\n    "react-dom": "18.0.0",\n    "@mui/material": "5.6.2",\n    "@emotion/react": "11.9.0",\n    "@emotion/styled": "11.8.1"\n  }\n}',
        active: !1,
        closed: !0
      },
      {
        name: 'index',
        value:
          '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link rel="stylesheet" href="src/style.css">\n  </head>\n  <body>\n    <div id="root"></div>\n\n    <script src="src/index.jsx"></script>\n  </body>\n</html>',
        active: !1,
        closed: !0,
        extension: '.html'
      },
      {
        name: 'style',
        value:
          "body {\n  padding: 0 24px;\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}",
        active: !1,
        closed: !0,
        extension: '.css'
      },
      {
        name: 'App',
        value:
          "import React from 'react'\nimport Card from '@mui/material/Card'\nimport CardActions from '@mui/material/CardActions'\nimport CardContent from '@mui/material/CardContent'\nimport Button from '@mui/material/Button'\nimport Typography from '@mui/material/Typography'\n\nexport default function BasicCard() {\n  const clickHandler = () => console.log('hello world')\n\n  return (\n    <Card sx={{ minWidth: 275 }}>\n      <CardContent>\n        <Typography sx={{ mb: 1.5 }} color='text.secondary'>\n          Hello MUI\n        </Typography>\n        <Typography variant='body2'>\n          Try edit me, to see magic happen\n        </Typography>\n      </CardContent>\n      <CardActions>\n        <Button size='small' onClick={clickHandler}>\n          Click me\n        </Button>\n      </CardActions>\n    </Card>\n  )\n}\n\nexport function App(props) {\n  return (\n    <div className='App'>\n      <BasicCard />\n    </div>\n  )\n}\n\n// Log to console\nconsole.log('Hello console')",
        active: !0,
        closed: !1,
        extension: '.jsx'
      },
      {
        name: 'index',
        value:
          "import React from 'react';\nimport ReactDOM from 'react-dom/client';\n\nimport { App } from './App.jsx'\n\nReactDOM.createRoot( \n  document.querySelector('#root')\n).render(<App />)",
        active: !1,
        closed: !1,
        extension: '.jsx'
      }
    ]
  },
  p5: {
    title: 'p5.js Playground',
    icon: 'p5',
    packages: [
      {
        name: 'p5',
        version: '1.4.1'
      }
    ],
    files: [
      {
        name: 'index',
        value:
          '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link rel="stylesheet" href="src/style.css">\n  </head>\n  <body>\n    <div id="sketch"></div>\n\n    <script src="src/script.js"></script>\n  </body>\n</html>',
        active: !1,
        extension: '.html'
      },
      {
        name: 'style',
        value: 'body {\n  height: 100vh;\n  margin: 0;\n}',
        active: !1,
        extension: '.css'
      },
      {
        name: 'script',
        value:
          "import p5 from 'p5'\n\nexport const sketch = (p) => {\n  let maxSize = 500\n  let wspeed = 1.66\n  let hspeed = 1.33\n  let w = 0\n  let h = maxSize\n  let r = 0\n\n  // Calling p5.js functions, using the variable 'p'\n  p.setup = () => {\n    // Creating a canvas using the entire screen of the webpage\n    p.createCanvas(window.innerWidth, window.innerHeight)\n    p.strokeWeight(5)\n    p.background(255)\n\n    console.log('p5.js setup function executed!')\n  }\n\n  p.draw = () => {\n    // Clear the frame\n    p.background(255, 50)\n\n    // Draw an ellipse\n    p.translate(p.width / 2, p.height / 2)\n    p.rotate(r)\n    p.fill(0, 1)\n    p.stroke(5)\n    p.ellipse(0, 0, w, h)\n\n    // Updating rotation and increment values\n    r = r + 0.015\n    w = w + wspeed\n    h = h + hspeed\n    if (w < 0 || w > maxSize) wspeed *= -1\n    if (h < 0 || h > maxSize) hspeed *= -1\n  }\n\n  p.windowResized = () => {\n    p.resizeCanvas(window.innerWidth, window.innerHeight)\n  }\n}\n\nnew p5(sketch, document.getElementById('sketch'))",
        active: !0,
        extension: '.js'
      },
      {
        name: 'package',
        value: '{\n  "dependencies": {\n    "p5": "1.4.1"\n  }\n}',
        active: !1,
        closed: !0,
        extension: '.json'
      }
    ]
  },
  pixi: {
    title: 'PixiJS Playground',
    icon: 'pixi',
    packages: [
      {
        name: 'pixi.js',
        version: '6.3.0'
      }
    ],
    files: [
      {
        name: 'script',
        value:
          "import * as PIXI from 'pixi.js'\nimport santaUrl from '../assets/santa.png'\n    \n// The application will create a renderer using WebGL, if possible,\n// with a fallback to a canvas render. It will also setup the ticker\n// and the root stage PIXI.Container.\nconst app = new PIXI.Application();\n\n// The application will create a canvas element for you that you\n// can then insert into the DOM.\ndocument.body.appendChild(app.view);\n\n// load the texture we need\napp.loader.add('santa', santaUrl).load((loader, resources) => {\n\n    // This creates a texture from a 'santa.png' image.\n    const santa = new PIXI.Sprite(resources.santa.texture);\n\n    // Setup the position of the santa\n    santa.x = app.renderer.width / 2;\n    santa.y = app.renderer.height / 2;\n\n    // Rotate around the center\n    santa.anchor.x = 0.5;\n    santa.anchor.y = 0.5;\n\n    // Add the santa to the scene we are building.\n    app.stage.addChild(santa);\n\n    // Listen for frame updates\n    app.ticker.add(() => {\n         // each frame we spin the bunny around a bit\n        santa.rotation += 0.01;\n    });\n});",
        active: !0,
        extension: '.js'
      },
      {
        name: 'style',
        value:
          'body {\n  background: #6e28d9;\n  color: white;\n  padding: 0 24px;\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}',
        active: !1,
        extension: '.css'
      },
      {
        name: 'assets/santa',
        value:
          'https://hsto.org/files/447/9b4/6d3/4479b46d397e439a9613ce122a66a506.png',
        active: !1,
        closed: !0,
        isBinary: !0,
        extension: '.png'
      },
      {
        name: 'package',
        value: '{\n  "dependencies": {\n    "pixi.js": "6.3.0"\n  }\n}',
        active: !1,
        closed: !0,
        extension: '.json'
      }
    ]
  },
  react: {
    title: 'React Playground',
    icon: 'react',
    packages: [
      {
        name: 'react',
        version: '18.0.0'
      },
      {
        name: 'react-dom',
        version: '18.0.0'
      }
    ],
    files: [
      {
        name: 'App',
        value:
          "import React from 'react';\n\nexport function App(props) {\n  return (\n    <div className='App'>\n      <h1>Hello React.</h1>\n      <h2>Start editing to see some magic happen!</h2>\n    </div>\n  );\n}\n\n// Log to console\nconsole.log('Hello console')",
        active: !0,
        closed: !1,
        extension: '.jsx'
      },
      {
        name: 'style',
        value:
          "body {\n  background: transparent; /* Make it white if you need */\n  padding: 0 24px;\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.App {\n  color: #72a24d;\n}",
        active: !1,
        closed: !0,
        extension: '.css'
      },
      {
        name: 'index',
        value:
          "import React from 'react';\nimport ReactDOM from 'react-dom/client';\n\nimport { App } from './App.jsx'\n\nReactDOM.createRoot( \n  document.querySelector('#root')\n).render(<App />)",
        active: !1,
        closed: !1,
        extension: '.jsx'
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
  },
  react_mobx: {
    title: 'React Mobx Playground',
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
        value:
          "import React from 'react';\nimport { observer } from \"mobx-react\"\nimport Counter from './counterStore'\n\nconst counter = new Counter()\n\nexport const App = observer(() => (\n  <div className='App'>\n    <h1>Hello React.</h1>\n    <h2>Start editing to see some magic happen!</h2>\n    \n    <button onClick={() => counter.increment()}>\n      Increment  {counter.value}\n    </button>\n  </div>\n));\n\n// Log to console\nconsole.log('Hello console')",
        active: !0,
        closed: !1,
        extension: '.tsx'
      },
      {
        name: 'style',
        value:
          "body {\n  background: transparent; /* Make it white if you need */\n  padding: 0 24px;\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.App {\n  color: #72a24d;\n}",
        active: !1,
        closed: !0,
        extension: '.css'
      },
      {
        name: 'counterStore',
        value:
          "import { makeAutoObservable } from 'mobx';\n\nexport default class Counter {\n  value = 0;\n\n  constructor() {\n    makeAutoObservable(this);\n  }\n\n  increment() {\n    this.value++;\n  }\n}",
        active: !1,
        closed: !1,
        extension: '.ts'
      },
      {
        name: 'index',
        value:
          "import React from 'react';\nimport ReactDOM from 'react-dom/client';\n\nimport { App } from './App'\n\nReactDOM.createRoot(\n  document.querySelector('#root')\n).render(<App />)",
        active: !1,
        closed: !0,
        extension: '.tsx'
      },
      {
        name: 'package',
        extension: '.json',
        value:
          '{\n  "dependencies": {\n    "react": "18.0.0",\n    "react-dom": "18.0.0",\n    "mobx": "6.6.1",\n    "mobx-react": "7.5.2"\n  }\n}',
        active: !1,
        closed: !0
      }
    ]
  },
  react_redux_toolkit: {
    title: 'React Redux Toolkit Playground',
    icon: 'redux',
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
        name: 'index',
        value:
          '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link rel="stylesheet" href="src/style.css">\n  </head>\n  <body>\n    <div id="root"></div>\n\n    <script src="src/index.tsx"></script>\n  </body>\n</html>',
        active: !1,
        closed: !0,
        extension: '.html'
      },
      {
        name: 'style',
        value:
          "body {\n  background: transparent; /* Make it white if you need */\n  padding: 0 24px;\n  height: 100vh;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.App {\n  color: #72a24d;\n}",
        active: !1,
        closed: !0,
        extension: '.css'
      },
      {
        name: 'App',
        value:
          "import React from 'react';\nimport { Counter } from './counter/Counter';\n\nexport default function App() {\n  return (\n    <div className='App'>\n      <h1>Hello Redux Toolkit.</h1>\n      <h2>Start editing to see some magic happen!</h2>\n      <Counter />\n    </div>\n  );\n}\n\n// Log to console\nconsole.log('Hello console');",
        active: !1,
        closed: !1,
        extension: '.tsx'
      },
      {
        name: 'store',
        value:
          "import { configureStore } from '@reduxjs/toolkit';\nimport counterReducer from './counter/counterSlice';\n\nexport const store = configureStore({\n  reducer: {\n    counter: counterReducer,\n  },\n});",
        active: !1,
        closed: !0,
        extension: '.ts'
      },
      {
        name: 'counter/Counter',
        value:
          "import React from 'react';\n\nimport { useDispatch, useSelector } from 'react-redux'\nimport { increment, selectCount } from './counterSlice';\n\nexport function Counter() {\n  const count = useSelector(selectCount);\n  const dispatch = useDispatch();\n\n  return (\n    <div>\n      <button onClick={() => dispatch(increment())}>\n        Increment (<span>{count}</span>)\n      </button>\n    </div>\n  );\n}",
        active: !0,
        closed: !1,
        extension: '.tsx'
      },
      {
        name: 'index',
        value:
          "import React from 'react';\nimport { createRoot } from 'react-dom/client';\nimport { Provider } from 'react-redux';\nimport { store } from './store';\nimport App from './App';\n\nconst container = document.getElementById('root')!;\nconst root = createRoot(container);\n\nroot.render(\n  <React.StrictMode>\n    <Provider store={store}>\n      <App />\n    </Provider>\n  </React.StrictMode>\n);\n",
        active: !1,
        closed: !0,
        extension: '.tsx'
      },
      {
        name: 'counter/counterSlice',
        value:
          "import { createSlice } from '@reduxjs/toolkit';\n\nconst initialState = {\n  value: 0,\n};\n\nexport const counterSlice = createSlice({\n  name: 'counter',\n  initialState,\n  reducers: {\n    increment: state => {\n      state.value += 1;\n    },\n  },\n});\n\nexport const { increment } = counterSlice.actions;\n\nexport const selectCount = state => state.counter.value;\n\nexport default counterSlice.reducer;\n",
        active: !1,
        closed: !1,
        extension: '.ts'
      },
      {
        name: 'package',
        extension: '.json',
        value:
          '{\n  "dependencies": {\n    "react": "18.0.0",\n    "react-dom": "18.0.0",\n    "react-redux": "8.0.2",\n    "@reduxjs/toolkit": "1.8.3"\n  }\n}',
        active: !1,
        closed: !0
      }
    ]
  },
  react_ts_classes: {
    title: 'React TypeScript Playground Classes',
    icon: 'react',
    packages: [
      {
        name: 'react',
        version: '18.0.0'
      },
      {
        name: 'react-dom',
        version: '18.0.0'
      }
    ],
    files: [
      {
        name: 'App',
        value:
          "import React, {Component} from 'react';\nimport Hello from './Hello'\n\ninterface AppProps {}\ninterface AppState {\n  name: string;\n}\n\nexport class App extends Component<AppProps, AppState> {\n  state = {\n    name: 'React TypeScript'\n  }\n\n  render() {\n    return (\n      <div className=\"App\">\n        <Hello name={this.state.name} />\n        <p>\n          Start editing to see some magic happen :)\n        </p>\n      </div>\n    );\n  }\n}\n\n// Log to console\nconsole.log('Hello console');",
        active: !0,
        closed: !1,
        extension: '.tsx'
      },
      {
        name: 'style',
        value:
          "body {\n  background: transparent; /* Make it white if you need */\n  padding: 0 24px;\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.App {\n  color: #72a24d;\n}",
        active: !1,
        closed: !0,
        extension: '.css'
      },
      {
        name: 'Hello',
        value:
          "import React from 'react';\n\nexport default ({ name }) => <h1>Hello {name}!</h1>;",
        active: !1,
        closed: !1,
        extension: '.tsx'
      },
      {
        name: 'index',
        value:
          'import React from "react";\nimport * as ReactDOMClient from "react-dom/client";\n\nimport {App} from "./App";\n\nconst rootElement = document.getElementById("root");\nconst root = ReactDOMClient.createRoot(rootElement);\n\nroot.render(\n  <App />\n);',
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
  },
  react_ts_hooks: {
    title: 'React TypeScript Playground Hooks',
    icon: 'react',
    packages: [
      {
        name: 'react',
        version: '18.0.0',
        url: 'https://unpkg.com/react@18.2.0/umd/react.development.js'
      },
      {
        name: 'react-dom',
        version: '18.0.0'
      }
    ],
    files: [
      {
        name: 'App',
        value:
          "import React from 'react';\n\nexport default function App() {\n  return (\n    <div className='App'>\n      <h1>Hello React TypeScript.</h1>\n      <h2>Start editing to see some magic happen!</h2>\n    </div>\n  );\n}\n\n// Log to console\nconsole.log('Hello console');",
        active: !0,
        closed: !1,
        extension: '.tsx'
      },
      {
        name: 'style',
        value:
          "body {\n  background: transparent; /* Make it white if you need */\n  padding: 0 24px;\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.App {\n  color: #72a24d;\n}",
        active: !1,
        closed: !0,
        extension: '.css'
      },
      {
        name: 'index',
        value:
          'import React, { StrictMode } from "react";\nimport * as ReactDOMClient from "react-dom/client";\n\nimport App from "./App";\n\nconst rootElement = document.getElementById("root");\nconst root = ReactDOMClient.createRoot(rootElement);\n\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);\n',
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
  },
  rxjs: {
    previewClosed: !0,
    title: 'RxJS Playground',
    icon: 'rxjs',
    packages: [
      {
        name: 'rxjs',
        version: '8.0.0-alpha.3',
        path: '/dist/esm5/index.js',
        source: 'jsdelivr'
      }
    ],
    files: [
      {
        name: 'script',
        value:
          "import { fromEvent, scan } from 'rxjs';\n\nfromEvent(document, 'click')\n  .pipe(scan((count) => count + 1, 0))\n  .subscribe((count) => console.log('Clicked ' + count + ' times'));\n\nconsole.log('Click to WEBSITE VIEW panel')",
        active: !0,
        extension: '.js'
      },
      {
        name: 'package',
        value: '{\n  "dependencies": {\n    "rxjs": "8.0.0-alpha.3"\n  }\n}',
        active: !1,
        closed: !0,
        extension: '.json'
      }
    ]
  },
  scss: {
    title: 'SASS/SCSS Playground',
    icon: 'scss',
    packages: [],
    files: [
      {
        name: 'index',
        value:
          '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link rel="stylesheet" href="src/style.scss">\n  </head>\n  <body>\n    <h1>Hi friend, try change my <span>color</span>!</h1>\n\n    <script src="src/script.js"></script>\n  </body>\n</html>',
        active: !1,
        extension: '.html'
      },
      {
        name: 'style',
        value:
          'body {\n  background: #6e28d9;\n  color: white; /* Change my color to yellow */\n  padding: 0 24px;\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  \n  span {\n    color: white; /* Change my color to red */\n  }\n}',
        active: !0,
        extension: '.scss'
      },
      {
        name: 'script',
        value: "console.log('it shows results as you type')",
        active: !1,
        extension: '.js'
      }
    ]
  },
  svelte: {
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
        value:
          '<script>\n\timport Button from "./Button.svelte";\n</script>\n\n<style>\n  main {\n    font-family: sans-serif;\n    text-align: center;\n  }\n</style>\n\n<main>\n\t<h1>Hello Svelte</h1>\n\t<h2>Start editing to see some magic happen!</h2>\n\t<Button />\n</main>',
        active: !0,
        extension: '.svelte'
      },
      {
        name: 'style',
        value:
          "body {\n  background: transparent; /* Make it white if you need */\n  color: #fcbe24;\n  padding: 0 24px;\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}",
        active: !1,
        closed: !0,
        extension: '.css'
      },
      {
        name: 'script',
        value:
          'import App from "./App.svelte";\n\nconst app = new App({\n  target: document.body\n});\n\nexport default app;',
        active: !1,
        extension: '.js'
      },
      {
        name: 'Button',
        value:
          "<script>\n\tlet count = 0;\n\n\tfunction handleClick() {\n\t  count += 1;\n\t}\n</script>\n\n<style>\n\tbutton {\n\t  background: #ff3e00;\n\t  color: white;\n\t  border: none;\n\t  padding: 8px 12px;\n\t  border-radius: 2px;\n\t}\n</style>\n\n<button on:click={handleClick}>\n  Clicked {count} {count === 1 ? 'time' : 'times'}\n</button>",
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
  },
  tailwindcss: {
    title: 'Tailwind CSS Playground',
    icon: 'tailwindcss',
    packages: [],
    files: [
      {
        name: 'index',
        value:
          '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    \x3c!-- Tailwind docs: https://tailwindcss.com/docs/installation/play-cdn --\x3e\n    <script src="https://cdn.tailwindcss.com"></script>\n    <script>\n      tailwind.config = {\n        theme: {\n          extend: {\n            colors: {\n              clifford: \'#da373d\',\n            }\n          }\n        }\n      }\n    </script>\n    <link rel="stylesheet" href="src/style.css" >\n  </head>\n\n  <body class="py-5 px-5 bg-blue-500">\n    <h1 class="text-3xl font-bold underline text-clifford">\n      Hello Tailwind CSS\n    </h1>\n    <h2 class="mt-4 bg-sky-500">\n      Start editing to see some magic happen!\n    </h2>\n\n    <script src="src/script.js"></script>\n  </body>\n</html>\n',
        active: !0,
        extension: '.html'
      },
      {
        name: 'style',
        value:
          "body {\n  height: 100vh;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}",
        active: !1,
        extension: '.css'
      },
      {
        name: 'script',
        value: "console.log('Hello console')",
        active: !1,
        extension: '.js'
      }
    ]
  },
  solidjs: {
    title: 'SolidJS Playground',
    icon: 'solidjs',
    packages: [
      {
        name: 'solidjs',
        version: '1.1.2'
      }
    ],
    files: [
      {
        name: 'index',
        value: '',
        active: !1,
        extension: '.js'
      }
    ]
  },
  threejs: {
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
        value: 'body {\n  height: 100vh;\n  margin: 0;\n}',
        active: !1,
        extension: '.css'
      },
      {
        name: 'script',
        value:
          "import * as THREE from 'three';\n\n// init\nconst camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );\ncamera.position.z = 1;\n\nconst scene = new THREE.Scene();\n\nconst geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );\nconst material = new THREE.MeshNormalMaterial();\n\nconst mesh = new THREE.Mesh( geometry, material );\nscene.add( mesh );\n\nconst renderer = new THREE.WebGLRenderer( { antialias: true } );\nrenderer.setSize( window.innerWidth, window.innerHeight );\nrenderer.setAnimationLoop( animation );\ndocument.body.appendChild( renderer.domElement );\n\n// animation\nfunction animation( time ) {\n  mesh.rotation.x = time / 2000;\n  mesh.rotation.y = time / 1000;\n\n  renderer.render( scene, camera );\n}",
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
  },
  typescript: {
    title: 'TypeScript Playground',
    icon: 'typescript',
    packages: [],
    files: [
      {
        name: 'index',
        value:
          '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link rel="stylesheet" href="src/style.css" >\n  </head>\n  <body>\n    <h1 id="header"></h1>\n\n    <script src="src/script.ts"></script>\n  </body>\n</html>',
        active: !1,
        extension: '.html'
      },
      {
        name: 'style',
        value: 'body {\n  color: #fcbe24;\n  margin: 0;\n}',
        active: !1,
        extension: '.css'
      },
      {
        name: 'script',
        value:
          "// Note: please restart the page if syntax highlighting works bad.\nlet el = document.querySelector('#header')\n\nlet msg: string = 'Hi friend, try edit me!'\nel.innerHTML = msg\n\nconsole.log('it shows results as you type')",
        active: !0,
        extension: '.ts'
      }
    ]
  },
  vue: {
    title: 'Vue Playground',
    icon: 'vue',
    packages: [
      {
        name: 'vue',
        version: '3.2.33',
        active: !1,
        url: 'https://unpkg.com/@vue/runtime-dom@3.2.41/dist/runtime-dom.esm-browser.js'
      },
      {
        name: 'vue-demi',
        version: '0.13.11',
        source: 'unpkg',
        description:
          'Vue Demi (half in French) is a developing utility allows you to write Universal Vue Libraries for Vue 2 & 3',
        url: 'https://unpkg.com/vue-demi/lib/index.mjs'
      },
      {
        name: '@vueuse/shared',
        version: '9.0.0',
        source: 'unpkg',
        description: 'Shared VueUse utilities.',
        url: 'https://unpkg.com/@vueuse/shared@9.0.0/index.mjs'
      },
      {
        name: '@vueuse/core',
        version: '9.0.0',
        source: 'unpkg',
        description: 'Collection of essential Vue Composition Utilities',
        url: 'https://unpkg.com/@vueuse/core@9.0.0/index.mjs'
      }
    ],
    files: [
      {
        name: 'App',
        value:
          '<script setup>import {ref} from \'vue\'\n\nconst count = ref(0)\n</script>\n\n<template><h1>Hello Vue 3</h1>\n<button @click="count++">Count is: {{ count }}</button>\n</template>\n\n<style scoped>button {\n  font-weight: bold;\n}\n</style>',
        active: !1,
        extension: '.vue'
      },
      {
        name: 'style',
        value: 'body {\n  color: #fcbe24;\n  padding: 0 24px;\n  margin: 0;\n}',
        active: !1,
        closed: !0,
        extension: '.css'
      },
      {
        name: 'main',
        value:
          "import { createApp } from 'vue'\nimport App from './App.vue'\n\nconsole.log('Hello world')\n\ncreateApp(App).mount('#app')",
        active: !0,
        extension: '.js'
      },
      {
        name: 'package',
        extension: '.json',
        value: '{\n  "dependencies": {\n    "vue": "3.2.33"\n  }\n}',
        active: !1,
        closed: !0
      }
    ]
  },
  pug: {
    title: 'pug',
    icon: 'pug',
    packages: [{ name: '', version: '1' }],
    files: [
      {
        name: 'App',
        value: '',
        active: !0,
        extension: '.pug'
      }
    ]
  },
  pwa: {
    title: 'pwa',
    icon: 'pwa',
    packages: [{ name: '', version: '1' }],
    files: [
      {
        name: 'App',
        value: '',
        active: !0,
        extension: '.js'
      }
    ]
  }
};
