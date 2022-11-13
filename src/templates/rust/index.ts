import { defineTemplate } from '..';
import main from './main.rs?raw';

export default defineTemplate({
  title: 'Rust',
  homepage: 'http://www.rust-lang.org/',
  icon: 'rust',
  configs: { preview: !1 },
  packages: [],
  files: [
    {
      name: 'main',
      value: main,
      active: !0,
      extension: '.rs'
    },
    {
      name: 'package',
      extension: '.json',
      value: '{\n  "dependencies": {\n    "vue": "3.2.33"\n  }\n}',
      active: !1,
      closed: !0
    }
  ]
});
