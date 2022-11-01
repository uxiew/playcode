import Babel from '@babel/standalone';
import type { TransformOptions } from '@babel/core';
import type { OrchestratorFile as File } from '../orchestrator';

// source from https://github.com/babel/website/blob/main/js/repl/compile.ts
const babelConfig: TransformOptions = {
  babelrc: false,
  filename: 'repl' + guessFileExtension(config.presets),

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
        runtime: 'automatic' //"classic" | "automatic"
      }
    ],
    'typescript'
  ],
  plugins: [],
  sourceType: 'module'
};

export async function compileReactFile({ filename, code, compiled }: File) {
  try {
    const transformed = Babel.transform(code, babelConfig);
    compiled = transformed.code;
    console.log(transformed);
  } catch (error) {
    compiled = null;
  }
}
