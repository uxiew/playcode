import type { OrchestratorFile as File } from '../orchestrator';

export async function compileTemplateFile({
  filename,
  template,
  compiled
}: File) {
  compiled.html = template;
}
