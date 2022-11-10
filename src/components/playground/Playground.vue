<script setup lang="ts">
import { ref, computed } from 'vue';
import { Splitpanes, Pane } from 'splitpanes';
import {
  sourceType,
  orchestrator,
  onShouldUpdateContent
} from '~/orchestrator';
import { settings } from '~/configs/settings';
import { contentType } from '~/logic/usePreview/update';

const initialScript = ref('');
const initialTemplate = ref('');
const initialStyle = ref('');

const onlyScript = computed(
  () => !initialStyle.value && !initialTemplate.value
);

onShouldUpdateContent(() => {
  if (orchestrator.activeFile) {
    initialScript.value = orchestrator.activeFile?.script;
    initialTemplate.value = orchestrator.activeFile?.template;
    initialStyle.value = orchestrator.activeFile?.style;
  }
});

// 内容变动
const onContentChanged = (type: sourceType, content: string) => {
  if (!orchestrator.activeFile) return;
  contentType.value = type;
  if (type === 'script') orchestrator.activeFile.script = content;
  if (type === 'template') orchestrator.activeFile.template = content;
  if (type === 'style') orchestrator.activeFile.style = content;
};
</script>

<template>
  <Splitpanes class="default-theme">
    <Pane size="60">
      <div class="h-full flex flex-col">
        <TabBar />
        <Splitpanes horizontal class="default-theme editors-height">
          <Pane v-if="initialScript">
            <Container
              title="Script"
              class="rounded-b-md"
              no-overflow
              no-rounding
            >
              <template #default>
                <Editor
                  language="typescript"
                  :value="initialScript"
                  @change="(content) => onContentChanged('script', content)"
                />
              </template>
            </Container>
          </Pane>
          <!-- vue or Svelte -->
          <Pane v-if="!onlyScript">
            <Splitpanes vertical>
              <Pane v-if="initialTemplate">
                <Container
                  title="Template"
                  border="1  rounded-b-md"
                  no-overflow
                  :no-rounding="!initialScript ? true : false"
                >
                  <template #default>
                    <Editor
                      language="html"
                      :value="initialTemplate"
                      @change="
                        (content) => onContentChanged('template', content)
                      "
                    />
                  </template>
                </Container>
              </Pane>
              <Pane v-if="initialStyle">
                <Container
                  title="Style"
                  border="1  rounded-b-md"
                  no-overflow
                  :no-rounding="!initialScript ? true : false"
                >
                  <template #default>
                    <Editor
                      language="css"
                      :value="initialStyle"
                      @change="(content) => onContentChanged('style', content)"
                    />
                  </template>
                </Container>
              </Pane>
            </Splitpanes>
          </Pane>
        </Splitpanes>
      </div>
    </Pane>
    <!-- 右侧部分 -->
    <Pane>
      <Splitpanes horizontal class="default-theme">
        <Pane v-if="settings.preview" size="70">
          <DeviceEmulation />
        </Pane>
        <Pane>
          <Container title="Console">
            <Console />
          </Container>
        </Pane>
      </Splitpanes>
    </Pane>
  </Splitpanes>
</template>
