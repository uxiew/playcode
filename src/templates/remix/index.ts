import main from './main.ts?raw';

export default {
  title: 'Remix',
  homepage: 'https://remix.run/',
  icon: 'remix',
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
