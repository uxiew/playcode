import main from './main.ts?raw';

export default {
  title: 'Deno',
  homepage: 'https://deno.land/',
  icon: 'deno',
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
