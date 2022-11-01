<script setup lang="ts">
import { ref } from 'vue';
import { useVModel } from '@vueuse/core';
import { orchestrator } from '~/orchestrator';

const props = defineProps<{ modelValue: boolean }>();
const isOpen = useVModel(props);
</script>

<template>
  <Dialog
    :open="isOpen"
    position="fixed inset-0"
    overflow="y-auto"
    z="10"
    @close="isOpen = false"
  >
    <div
      grid="~"
      position="relative"
      p="x-10 y-0"
      place="items-center"
      min-h="screen"
    >
      <DialogOverlay
        position="fixed inset-0"
        backdrop="~ blur"
        bg="dark:(black opacity-20)"
      />
      <div
        position="relative"
        border="rounded-md"
        overflow="y-auto"
        bg="light-100 dark:dark-700"
        shadow="lg"
        max-w="screen-lg"
        w="full"
        max-h="[70vh]"
        h="full"
        p="x-4 y-6"
      >
        <templatePanel @closeDialog="isOpen = false" />
      </div>
    </div>
    <Button opacity="0" class="absolute bottom-0" />
  </Dialog>
</template>
