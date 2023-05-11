<template>
  <div class="hello-world">{{ props.title }} Component!</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Hello World!',
  },
})
</script>

<style scoped>
.hello-world {
  display: inline-block;
  padding: 10px;
  font-weight: bold;
  border: 3px solid #c7c7c7;
  border-radius: 3px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>
