import type { OrchestratorFile as File } from '../orchestrator';

export async function compileTemplateFile({
  filename,
  template,
  compiled
}: File) {
  compiled.html = template;

  // 分析当前 html style 和 script
  // if (code.startsWith('<!DOCTYPE')) {
  //   templateHtml.
  // }
  // throw new Error('html file only supports body tag content!');

  console.log(filename, template);
  // const { render } = await import('https://jspm.dev/pug');
  // const htmlContent = render(template);
}
