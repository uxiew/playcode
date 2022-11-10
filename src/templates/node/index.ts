import { Template } from '..';
import main from './main.ts?raw';

export default <Template>{
  title: 'Node Typescript',
  homepage: 'https://nodejs.org/',
  icon: 'node',
  configs: {
    preview: false
  },
  packages: [],
  files: [
    {
      name: 'main',
      value: main,
      active: !0,
      extension: '.ts'
    }
  ]
};
