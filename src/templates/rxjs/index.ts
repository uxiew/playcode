import { Template } from '..';
import script from './script.js?raw';

export default <Template>{
  title: 'RxJS',
  icon: 'rxjs',
  packages: [
    {
      name: 'rxjs',
      version: '8.0.0-alpha.3',
      path: '/dist/esm5/index.js',
      source: 'jsdelivr'
    }
  ],
  configs: {},
  files: [
    {
      name: 'script',
      value: script,
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
};
