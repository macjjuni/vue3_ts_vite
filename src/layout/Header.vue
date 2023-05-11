<template>
  <v-app-bar :elevation="10" style="position: relative">
    <v-app-bar-title>
      <router-link to="/">Vue3_TS_Vite_Boilerplate</router-link>
    </v-app-bar-title>

    <v-spacer />
    <router-link v-for="route in routes" :key="route.name" :to="route.path" :title="route.name">
      <v-btn icon>
        <v-icon>{{ route.meta.icon }}</v-icon>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const { getRoutes } = useRouter()
const routes = getRoutes()
</script>
<style></style>
