import { defineTemplate } from '..';
import main from './main.ts?raw';

export default defineTemplate({
  title: 'NestJS',
  icon: 'nestjs',
  homepage: '',
  packages: [],
  files: [
    {
      name: 'main',
      value: main,
      extension: '.ts',
      active: !0
    }
  ]
});
