import type { Package } from '~/utils/pkg';
import type { KeyList } from './templates';

interface RunTime {
  [k: string]: Package[];
}

export const runtimes: RunTime = {
  vue: [
    {
      name: '@vue/runtime-dom',
      version: '3.2.41',
      url: '',
      path: '/dist/runtime-dom.esm-browser.js',
      source: 'unpkg',
      description: 'vue',
      active: true
    }
  ]
};
