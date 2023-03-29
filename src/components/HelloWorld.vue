<template>
  <div class="hello">
    <div>{{ props.msg }}</div>
    <div>
      <!-- <p>Count: {{ count }}</p>
      <button @click="incrementCount">Increment Count</button> -->
    </div>
    <p class="test">1</p>
    <p class="test">2</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  msg: {
    type: String,
    default: 'message',
  },
})

// const state = reactive({
//   count: 10,
//   increase: () => state.count++,
//   decrease: () => state.count--,
// })

// const count = ref(0)

// const incrementCount = () => {
//   count.value++
// }

// const handleUpdate = () => {
//   state.count++
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
