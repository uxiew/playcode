<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { initEditor, useMonaco } from '~/logic/useMonaco/';
import { updatePreview } from '~/logic/usePreview/preview';
import { orchestrator as store, sourceType } from '~/orchestrator';
import { setupMonaco } from '~/monaco';

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

/**
 * 当内容更改时
 */
onChange(async (content) => {
  emit('change', content);
  updatePreview();
});
</script>

<template>
  <div ref="target" class="h-full w-full"></div>
</template>
