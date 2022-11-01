<script setup lang="ts">
import { useVModel, useClipboard, useEventListener } from '@vueuse/core';
import { isDark, toggleDark } from '~/logic/dark';

const props = defineProps<{
  modelValue: boolean;
}>();
const isOpen = useVModel(props);

const { copy } = useClipboard();

const emit = defineEmits(['update:init']);

const createNewIdea = () => {
  emit('update:init', true);
};

// const share = () => {
//   const state = exportState();
//   window.location.hash = state;
//   return copy(window.location.href);
// };

// useEventListener('keydown', (ev) => {
//   if (ev.ctrlKey && ev.code === 'KeyS' && !ev.shiftKey) {
//     ev.preventDefault();
//     share().then(() => alert('URL copied to clipboard'));
//   }
// });
</script>

<template>
  <div position="fixed right-0 top-0 bottom-0" p="x-2" h="60px" flex="~ row">
    <Button icon text="base" @click="createNewIdea()">
      <carbon-idea />
    </Button>
    <Button icon text="base" @click="toggleDark()">
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </Button>
    <Button icon text="base" @click="isOpen = true">
      <carbon-settings />
    </Button>
  </div>
</template>
