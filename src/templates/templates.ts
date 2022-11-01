//  from playcode.io

import type { Package } from '~/utils/pkg';

// POPULAR TEMPLATES
import svelte from './svelte';
import solid from './solid';
import scss from './scss';

// JAVASCRIPT LIBRARIES
import rxjs from './rxjs';

// VUE
import vue from './vue';
import vue_element_plus from './vue_element_plus';

// REACT
import react_ts_hooks from './react_ts_hooks/';
import react_mui from './react_mui';

// CSS FRAMEWORKS
import tailwindcss from './tailwindcss';

// GRAPHICS
import pixi from './pixi';
import threejs from './threejs';

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
  vue_element_plus,
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
  react_mui,
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
  pixi,
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
  react_ts_hooks,
  rxjs,
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
  scss,
  svelte,
  tailwindcss,
  solid,
  threejs,
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
  vue,
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
