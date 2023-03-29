<template>
  <div class="Home">
    <p>{{ props.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: 'Dashboard!',
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
