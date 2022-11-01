import { useDark, useToggle } from '@vueuse/core';

export const isDark = useDark({
  storageKey: 'color-schema'
});
export const toggleDark = useToggle(isDark);
