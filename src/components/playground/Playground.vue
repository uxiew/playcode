<script setup lang="ts">
import { ref, computed } from 'vue';
import { Splitpanes, Pane } from 'splitpanes';
import {
  sourceType,
  orchestrator as store,
  onShouldUpdateContent
} from '~/orchestrator';
import { settings } from '~/configs/settings';
import { contentType } from '~/logic/usePreview';
import { getEditor, getModel } from '~/monaco/utils';
import { useMonaco } from '~/logic/useMonaco';

const initialScript = ref('');
const initialTemplate = ref('');
const initialStyle = ref('');

const onlyScript = computed(
  () => !initialStyle.value && !initialTemplate.value
);

onShouldUpdateContent((params) => {
  console.log('onShouldUpdateContent', store.activeFile.filename, params);

  initialScript.value = store.activeFile?.script;
  initialTemplate.value = store.activeFile?.template;
  initialStyle.value = store.activeFile?.style;
});

// 内容变动
const onContentChanged = (type: sourceType, content: string) => {
  contentType.value = type;
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
                <!-- if 指令会导致 editor 示例化多个 -->
                <Editor
                  language="typescript"
                  type="script"
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
                  border="1 rounded-b-md"
                  no-overflow
                  :no-rounding="!initialScript ? true : false"
                >
                  <template #default>
                    <Editor
                      language="typescript"
                      type="template"
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
                      type="style"
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
