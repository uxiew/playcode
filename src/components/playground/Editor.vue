<script setup lang="ts">
import { ref } from 'vue';
import { useMonaco } from '~/logic/useMonaco/';
import { contentType } from '~/logic/usePreview';
import { updatePreview } from '~/logic/usePreview/preview';
import { orchestrator as store, sourceType } from '~/orchestrator';
import { trimCode } from '~/utils/tools';

const emit = defineEmits<(e: 'change', content: string) => void>();
const props = defineProps<{
  language: string;
  value: string;
  type: sourceType;
}>();

const target = ref();

const { onChange, getEditor } = useMonaco(target, {
  language: props.language,
  type: props.type
});

let preContent = trimCode(props.value);
/**
 * 当内容更改时
 */
onChange((content) => {
  emit('change', content);
  content = trimCode(content);
  if (content !== preContent) {
    updatePreview();
  }
  preContent = content;
});
</script>

<template>
  <div ref="target" class="h-full w-full"></div>
</template>
