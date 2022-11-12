<script setup lang="ts">
import { Console, ConsoleApi } from '~/logic/useConsole';
import { orchestrator } from '~/orchestrator';
</script>

<template>
  <div class="overflow-auto">
    <Console :data="ConsoleApi.value" />

    <Message
      v-for="message in orchestrator.runtimeErrors"
      :key="message"
      :message="message.toString()"
      type="error"
    />
    <Message
      v-for="message in orchestrator.errors"
      :key="message"
      :message="message.toString()"
      type="error"
    />
  </div>
</template>
