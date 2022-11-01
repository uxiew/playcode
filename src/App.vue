<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
const isInitialized = ref(true);
</script>

<template>
  <Templates v-model="isInitialized" />
  <div class="w-screen h-screen dark:bg-dark-900 p-4 dark:text-light-100 pt-10">
    <Navigation v-model="isOpen" v-model:init="isInitialized" />
    <Playground />
  </div>
  <Settings v-model="isOpen" />
</template>
