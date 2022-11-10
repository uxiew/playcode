<script setup lang="ts">
import { ref, onUnmounted, watch } from 'vue';
import { orchestrator as store } from '~/orchestrator';
import {
  previewState,
  initProxy,
  getProxy,
  prepareHTML
} from '~/logic/usePreview';

const container = ref();
let sandbox: HTMLIFrameElement;

// TODO reset sandbox when import map changes
watch(
  () => store.importMap,
  (importMap, prev) => {
    if (!importMap) {
      if (prev) createSandbox(); // import-map.json deleted
      return;
    }
    try {
      const map = JSON.parse(importMap);
      if (!map.imports) {
        store.errors = ['import-map.json is missing "imports" field.'];
        return;
      }
      if (map.imports.vue) {
        store.errors = [
          'Select Vue versions using the top-right dropdown.\n' +
            'Specifying it in the import map has no effect.'
        ];
      }
      // createSandbox();
    } catch (e) {
      store.errors = [e];
    }
  }
);

// create sandbox on compiled for run
watch(
  () => previewState.ready,
  (ready) => {
    if (ready) {
      createSandbox();
    } else {
      previewState.loaded = false;
    }
  }
);

onUnmounted(() => {
  getProxy().destroy();
});

// 创建沙箱运行环境
function createSandbox() {
  if (sandbox) {
    getProxy().destroy();
    container.value.removeChild(sandbox);
  }
  // 使用 iframe
  sandbox = document.createElement('iframe');
  sandbox.setAttribute(
    'sandbox',
    [
      'allow-forms',
      'allow-modals',
      'allow-pointer-lock',
      'allow-popups',
      'allow-same-origin',
      'allow-scripts',
      'allow-top-navigation-by-user-activation'
    ].join(' ')
  );
  sandbox.setAttribute(
    'allow',
    ['geolocation', 'midi', 'camera', 'microphone'].join(';')
  );

  sandbox.srcdoc = prepareHTML();
  container.value.appendChild(sandbox);

  const proxy = initProxy(sandbox);
  sandbox.addEventListener('load', () => {
    proxy.handle_links();
  });
}
</script>

<template>
  <div
    ref="container"
    w="full"
    h="full"
    flex="~"
    class="preview-container"
    place="items-center content-center"
  ></div>
</template>

<style>
.preview-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.preview-container,
iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
