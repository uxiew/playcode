import { Template } from '..';
import main from './main.ts?raw';

export default <Template>{
  title: 'NestJS',
  icon: 'nestjs',
  packages: [{}],
  files: [
    {
      name: 'main',
      value: main,
      extension: '.ts',
      active: !0
    }
  ]
};
