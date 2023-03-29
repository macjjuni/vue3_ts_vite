<template>
  <div class="Home">
    <p>{{ props.name }}</p>
    <p>토큰 필요 페이지</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, watchEffect } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: 'About Page!',
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
