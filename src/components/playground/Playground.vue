<script setup lang="ts">
import { ref, computed } from 'vue';
import { Splitpanes, Pane } from 'splitpanes';
import {
  sourceType,
  orchestrator as store,
  onShouldUpdateContent
} from '~/orchestrator';
import { settings } from '~/configs/settings';
import { isNotUndefined } from '~/utils/tools';
import { contentType } from '~/logic/usePreview';

const script = ref();
const style = ref();
const template = ref();

const onlyHasScript = computed(
  () => !hasValue('style') && !hasValue('template')
);

const hasValue = (type: sourceType) =>
  store.activeFile && isNotUndefined(store.activeFile[type]);

onShouldUpdateContent(() => {
  script.value = store.activeFile?.script;
  style.value = store.activeFile?.style;
  template.value = store.activeFile?.template;
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
          <Pane v-if="hasValue('script')">
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
                  :value="script"
                  @change="(content) => onContentChanged('script', content)"
                />
              </template>
            </Container>
          </Pane>
          <!-- vue or Svelte -->
          <Pane v-if="!onlyHasScript">
            <Splitpanes vertical>
              <Pane v-if="hasValue('template')">
                <Container
                  title="Template"
                  border="1 rounded-b-md"
                  no-overflow
                  :no-rounding="!script ? true : false"
                >
                  <template #default>
                    <Editor
                      language="typescript"
                      type="template"
                      :value="template"
                      @change="
                        (content) => onContentChanged('template', content)
                      "
                    />
                  </template>
                </Container>
              </Pane>
              <Pane v-if="hasValue('style')">
                <Container
                  title="Style"
                  border="1  rounded-b-md"
                  no-overflow
                  :no-rounding="!script ? true : false"
                >
                  <template #default>
                    <Editor
                      language="css"
                      type="style"
                      :value="style"
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
