// css|scss|less windi
// import sass from 'sass';
import less from 'less/lib/less-browser/';
// import * as Sass from 'browser-dart-sass';
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
    /* const compressed = await new Promise((resolve, reject) => {
      Sass.render(
        {
          data: style,
          importer: (url: any, prev: any, done: any) => {
            // importer(url, prev)
            //   .then(result => {
            //     done(result);
            //   })
            //   .catch(err => {
            //     done(err);
            //   });
            console.log(url, prev, done);
            debugger;
          },
          sourceMapEmbed: true,
          indentedSyntax: true
        },
        (err: any, result: any) => {
          if (err) {
            return reject(err);
          }
          return resolve(result);
        }
      );
    });

    // const compressed = sass.compileString(style, { style: 'compressed' });
    console.log('compressed', compressed); */
    compiled.css = style || '';
  }
  if (/\.less$/.test(filename)) {
    const compressed = less.render(style, {}, (error, output) => {});
    console.log(compressed);
  } else {
    compiled.css = style || '';
  }
}
