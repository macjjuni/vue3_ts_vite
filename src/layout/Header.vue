<template>
  <v-app-bar :elevation="10" style="position: relative">
    <v-app-bar-title>vue</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props"> <v-icon icon="mdi-widgets" /> </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in showMenu" :key="index">
          <router-link :to="item.path">
            <v-list-item-title>
              {{ item.name }}
            </v-list-item-title>
          </router-link>
        </v-list-item>
        <v-list-item>
          <router-link v-if="!isLogin" to="/login">
            <v-list-item-title>로그인</v-list-item-title>
          </router-link>
          <v-list-item-title v-else @click="onLogout">로그아웃</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>

  <!-- <header>
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
  </header> -->
</template>

<script setup lang="ts">
import { mdiAccount } from '@mdi/js'

import { ref, computed, watchEffect, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { login, logout } from '@/utils/auth'

const { getters } = useStore()
const router = useRouter()
const showMenu = ref(router.options.routes.filter((route) => route.meta?.show === true))
const isLogin = computed(() => (getters.userInfo.token ? true : false))

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
