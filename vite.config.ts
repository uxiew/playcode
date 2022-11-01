import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import ViteComponents, { HeadlessUiResolver } from 'vite-plugin-components';
import Icons, { ViteIconsResolver } from 'vite-plugin-icons';
import { copyVuePlugin } from './plugins/copy-vue';

import monacoEditorPlugin from 'vite-plugin-monaco-editor';
const prefix = 'monaco-editor/esm/vs';

const dir = path.resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  build: {},
  plugins: [
    vue(),
    copyVuePlugin(),
    WindiCSS({
      scan: {
        include: [`${dir}/**/*.{vue,html,jsx,tsx}`, 'index.html']
      }
    }),
    ViteComponents({
      globalComponentsDeclaration: true,
      customComponentResolvers: [
        ViteIconsResolver({
          componentPrefix: ''
        }),
        HeadlessUiResolver()
      ]
    }),
    Icons(),
    // VitePWA({
    //   base: '/',
    // }),
    monacoEditorPlugin({ globalAPI: true })
  ],
  resolve: {
    alias: {
      '~/': `${dir}/`,
      '@vue/compiler-sfc': '@vue/compiler-sfc/dist/compiler-sfc.esm-browser.js'
    }
  },
  optimizeDeps: {
    exclude: [
      'consolidate',
      'velocityjs',
      'dustjs-linkedin',
      'atpl',
      'liquor',
      'twig',
      'ejs',
      'eco',
      'jazz',
      'hamljs',
      'hamlet',
      'jqtpl',
      'whiskers',
      'haml-coffee',
      'hogan.js',
      'templayed',
      'handlebars',
      'underscore',
      'lodash',
      'walrus',
      'mustache',
      'just',
      'ect',
      'mote',
      'toffee',
      'dot',
      'bracket-template',
      'ractive',
      'htmling',
      'babel-core',
      'plates',
      'react-dom/server',
      'react',
      'vash',
      'slm',
      'marko',
      'teacup/lib/express',
      'coffee-script',
      'squirrelly',
      'twing'
    ]
  }
});
