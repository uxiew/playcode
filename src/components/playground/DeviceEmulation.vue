<script setup lang="ts">
import { ref, computed } from 'vue';
import { Hako } from 'vue-hako';
import { screenSizes } from '~/configs/devices';

const selected = ref<any>(screenSizes[0].items[0]);

const enabled = computed(() => selected.value.label === 'Default');

const width = computed(() => selected.value.key[0]);
const height = computed(() => selected.value.key[1]);
</script>

<template>
  <Container title="Output">
    <template #controls>
      <Select v-model="selected">
        <template #default="{ value }">
          <carbon-devices />
          <span>
            {{ value.label }}
          </span>
        </template>

        <template #items>
          <template v-for="sizes in screenSizes" :key="sizes.label">
            <div
              v-if="sizes.label !== 'DEFAULT'"
              p="x-4 y-2"
              cursor="default"
              text="gray-500  dark:dark-100 light-800"
              class="whitespace-nowrap"
              flex="~"
              space="x-2"
            >
              {{ sizes.label }}
            </div>
            <SelectItem
              v-for="device in sizes.items"
              :key="device.label"
              :value="device"
            >
              {{ device.label }}
            </SelectItem>
          </template>
        </template>
      </Select>
    </template>

    <template #default>
      <div h="full" :class="{ 'p-8 bg-light-700 dark:bg-dark-300': !enabled }">
        <Hako
          h="full"
          w="full"
          :width="width"
          :height="height"
          :disable-scaling="enabled"
        >
          <Preview shadow="lg" bg="dark:dark-700 light-100" />
        </Hako>
      </div>
    </template>
  </Container>
</template>
