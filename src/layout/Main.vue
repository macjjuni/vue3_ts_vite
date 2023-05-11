<template>
  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
main {
  position: relative;
  min-height: calc(100vh - 112px); /* header와 footer의 padding 값을 고려하여 계산 */
  padding: 20px;
}
</style>
