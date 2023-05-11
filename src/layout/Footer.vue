<template>
  <footer>{{ year + ' ' + 'Todo App.' }}</footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped>
footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 48px;
  padding: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>
