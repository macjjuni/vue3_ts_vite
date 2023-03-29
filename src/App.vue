<template>
  <Header />
  <Main />
  <Footer />
</template>

<script setup lang="ts">
import Header from '@/layout/Header.vue'
import Main from '@/layout/Main.vue'
import Footer from '@/layout/Footer.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

main {
  min-height: calc(100vh - 120px); /* header와 footer의 padding 값을 고려하여 계산 */
  padding: 20px;
}

footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  padding: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>
