<template>
  <header>
    <router-link class="logo" to="/">
      <img src="/vite.svg" alt="logo" width="30" height="30" />
    </router-link>
    <nav>
      <ul>
        <li v-for="item in showMenu" :key="item.name">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
        <li>
          <span>ID: {{ getters.userInfo.id }}</span>
        </li>
        <li>
          <button v-if="!isLogin" type="button" @click="onLogin">로그인</button>
          <button v-else type="button" @click="onLogout">로그아웃</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { login, logout } from '@/utils/auth'

const { getters } = useStore()
const router = useRouter()
const showMenu = ref(router.options.routes.filter((route) => route.meta?.show === true))
const isLogin = computed(() => (getters.userInfo.token ? true : false))

const onLogin = () => {
  router.push('/login')
}
const onLogout = () => {
  logout()
  router.push('/')
}
</script>

<style scoped>
.logo {
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  font-style: italic;
  color: orange;
}
ul {
  display: flex;
  padding-left: 0;
  list-style: none;
}
li {
  margin-left: 16px;
}
li > a {
  color: black;
  text-decoration: none;
}
</style>
