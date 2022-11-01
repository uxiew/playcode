<script setup lang="ts">
import type { Fn, isKeyOf } from '@antfu/utils';
import { ref, computed, reactive } from 'vue';
import { useVModel } from '@vueuse/core';
import { templateList } from '~/templates/templates';
import type { KeyList } from '~/templates/templates';
import { orchestrator, orchestratorInit } from '~/orchestrator';

const emit = defineEmits(['closeDialog']);
// const icons = import.meta.glob('../../assets/img/template/*');
// TODO maybe move templateicons to public directory
const icons = import.meta.globEager('../../assets/img/template/*') as {
  [key: string]: { default: string };
};

function getIcon(icon: string) {
  for (const path in icons) {
    if (path.indexOf(icon) > 0) return icons[path].default;
  }
  return '';
}

function setTemplate(key: KeyList) {
  orchestratorInit(key);
  emit('closeDialog');
}
</script>

<template>
  <div
    grid="~ gap-5"
    style="grid-template-columns: repeat(auto-fill, minmax(100px, 1fr))"
    p="2"
  >
    <div
      @click="setTemplate(key)"
      text="center"
      border="rounded"
      p="x-1 y-2"
      hover:bg="gray-300"
      cursor="pointer"
      :key="key"
      v-for="({ title, icon }, key) in templateList"
    >
      <img :src="getIcon(icon)" height="38" width="38" />
      <div font="weight-600" m="t-1.5" text="sm text-top break-words gray-500">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  display: initial !important;
}
</style>
