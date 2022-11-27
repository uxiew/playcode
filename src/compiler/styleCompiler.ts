// css|scss|less windi
// import sass from 'sass';
import less from 'less/lib/less-browser/';
import * as sass from 'browser-dart-sass';
import type { OrchestratorFile as File } from '../orchestrator';

// Sass doesn't currently support running in a browser. See https://github.com/sass/dart-sass/issues/25
// TODO sass support
export async function compileStyleFile({ filename, style, compiled }: File) {
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

  if (/\.(sc|sa)ss$/.test(filename)) {
    /* const result: {
      css: any;
      map: any;
      stats: any;
    } = await new Promise((resolve, reject) => {
      sass.render(
        {
          data: style,
          importer: (url: any, prev: any, done: any) => {
            console.log(url, prev, done);
          },
          sourceMapEmbed: true,
          indentedSyntax: false // filename.endsWith('.sass')
        },
        (err: any, result: any) => {
          if (err) {
            return reject(err);
          }
          return resolve(result);
        }
      );
    });

    console.log('styleCompiler', result.css.toString()); */
    compiled.css = style || '';
  } else if (/\.less$/.test(filename)) {
    const compressed = less.render(style, {}, (error, output) => {});
    console.log(compressed);
  } else {
    compiled.css = style || '';
  }
}
