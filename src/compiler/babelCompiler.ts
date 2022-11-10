import { transform } from '@babel/standalone';
import type { TransformOptions } from '@babel/core';
import type { OrchestratorFile as File } from '../orchestrator';
import { settings } from '~/configs/settings';

// source from https://github.com/babel/website/blob/main/js/repl/compile.ts
const getBabelConfig = (filename: string): TransformOptions => ({
  babelrc: false,
  configFile: false,
  filename: filename,
  // filename: 'repl' + guessFileExtension(config.presets),
  envName: 'development',
  presets: [
    [
      'env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        modules: false,
        targets: {
          chrome: 90
        }
      }
    ],
    [
      'react',
      {
        // jsx
        importSource: settings.babel?.importSource,
        runtime: 'automatic' // "classic" | "automatic"
      }
    ],
    'typescript'
  ],
  plugins: [],
  sourceType: 'module'
  // ast: true
});

export async function babelCompile({ filename, code, compiled }: File) {
  try {
    const transformed = transform(code, getBabelConfig(filename));
    compiled.js = transformed.code!;
    console.log(transformed);
  } catch (error) {
    console.log(error);
    // compiled = null;
  }
}
