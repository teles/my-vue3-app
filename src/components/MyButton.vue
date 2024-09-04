<template>
  <button>{{ label }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyButton',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
});
</script>
