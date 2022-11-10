// css|scss|less windi
// import sass from 'sass';
import less from 'less/lib/less-browser/';
import type { OrchestratorFile as File } from '../orchestrator';

// Sass doesn't currently support running in a browser. See https://github.com/sass/dart-sass/issues/25
// TODO sass support
export function compileStyleFile({ filename, style, compiled }: File) {
  /*(compiled.css = (
      await defaultCompiler.compileStyleAsync({
         source: code,
         filename,
         id,
         preprocessLang: 'scss',
         preprocessCustomRequire: async (id: string) => {
           // console.log(scssCompiler);
           // return scssCompiler;
         }
       }) 
     ).code);*/
  // if (filename.endsWith('.css')) return (compiled.css = style);
  console.log(style);
  compiled.css = style;

  // TODO scss or less
  // const compressed = sass.compileString(code, { style: 'compressed' });
  // @ts-ignore
  // less.render(code, {}, function (error, output) {});

  console.log(compiled.css);
}
