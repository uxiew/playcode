<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside, useEventListener } from '@vueuse/core';
import {
  orchestrator,
  addFile as addOrchestratorFile,
  OrchestratorFile
} from '~/orchestrator';
import { getExtension } from '~/utils/tools';

const fileNameInput = ref<HTMLInputElement>();
const isAddingTab = ref(false);
const filename = ref('');

useEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    isAddingTab.value = false;
    filename.value = '';
  }
});

const addFile = () => {
  isAddingTab.value = false;
  if (filename.value.length === 0) return;

  const name = filename.value;

  if (name in orchestrator.files) alert(name + ' File Already Exists!');

  addOrchestratorFile(new OrchestratorFile(name, ' ', getExtension(name)));
  filename.value = '';
};

onClickOutside(fileNameInput, () => {
  if (isAddingTab.value) addFile();
});

const addTab = () => {
  isAddingTab.value = true;
  setTimeout(() => {
    if (fileNameInput.value) fileNameInput.value.focus();
  });
};
</script>

<template>
  <div
    class="bg-light-500 h-8 overflow-hidden border-light-900 dark:border-dark-400 border-1 dark:bg-dark-800 rounded-t-md border-b flex flex-row items-center pr-2"
  >
    <!-- <Tab
      v-for="file in orchestrator.files"
      :key="file.filename"
      :active="file.filename === orchestrator.activeFilename"
      :name="file.filename"
    >
      {{ file.filename }}
    </Tab> -->
    <template v-for="file in orchestrator.files">
      <Tab
        v-if="!file.closed"
        :key="file.filename"
        :active="file.filename === orchestrator.activeFilename"
        :name="file.filename"
      >
        {{ file.filename }}
      </Tab>
    </template>
    <div v-if="isAddingTab">
      <Tab>
        <input
          ref="fileNameInput"
          v-model="filename"
          outline="focus:none"
          bg="transparent"
          type="text"
          placeholder="demo.ts"
          @keydown.enter="addFile()"
        />
      </Tab>
    </div>
    <Button small m="l-2" icon @click="addTab()">
      <carbon-add class="text-base" />
    </Button>
  </div>
</template>
