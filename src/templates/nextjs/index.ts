import { defineTemplate } from '..';
import main from './main.ts?raw';

export default defineTemplate({
  homepage: 'https://nextjs.org',
  title: 'NextJS',
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
