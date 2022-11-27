import { defineTemplate } from '..';
import script from './script.js?raw';

export default defineTemplate({
  title: 'RxJS',
  homepage: '',
  icon: 'rxjs',
  packages: [
    {
      name: 'rxjs',
      version: '8.0.0-alpha.3'
    }
  ],
  configs: {},
  files: [
    {
      name: 'main',
      value: script,
      active: !0,
      extension: '.js'
    }
  ]
});
