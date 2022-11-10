import type { OrchestratorFile as File } from '../orchestrator';

export async function compileTemplateFile({
  filename,
  template,
  compiled
}: File) {
  compiled.html = template;
  // const { render } = await import('https://jspm.dev/pug');
  // const htmlContent = render(template);
}
