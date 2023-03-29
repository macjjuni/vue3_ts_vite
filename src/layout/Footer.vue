<template>
  <footer>{{ year + ' ' + ['.'] }}</footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped></style>
