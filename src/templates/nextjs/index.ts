import { defineTemplate } from '..';
import main from './main.ts?raw';

export default defineTemplate({
  title: 'NextJS',
  homepage: 'https://nextjs.org/learn',
  icon: 'nextjs',
  packages: [{}],
  files: [
    {
      name: 'main',
      value: main,
      extension: '.ts',
      active: !0
    }
  ]
});
