<script setup lang="ts">
import { ref } from 'vue';
import { useMonaco } from '~/logic/useMonaco/';
import { updatePreview } from '~/logic/usePreview/preview';
import { sourceType } from '~/orchestrator';
import Packer from '~/utils/packer';

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

let preContent = Packer.compress(props.type, props.value);
/**
 * 当内容更改时
 */
onChange((content) => {
  emit('change', content);
  content = Packer.compress(props.type, content);
  if (content !== preContent) {
    updatePreview();
  }
  preContent = content;
});
</script>

<template>
  <div ref="target" class="h-full w-full"></div>
</template>
