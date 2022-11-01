// scss less windi
import sass from 'sass';
import less from 'less/lib/less-browser/';
import type { OrchestratorFile as File } from '../orchestrator';


// Sass doesn't currently support running in a browser. See https://github.com/sass/dart-sass/issues/25
// TODO sass support
export const scssCompiler = sass;
export async function compileStyle({ filename, code, compiled }: File) {
  if (filename.endsWith('.css')) return (compiled.css = code);

  // TODO scss or less
  const compressed = sass.compileString(code, { style: 'compressed' });
  // @ts-ignore
  less.render(code, {}, function (error, output) {});

  console.log(compressed.css);
}
