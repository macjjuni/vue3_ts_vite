<template>
  <div class="Login">
    <v-card class="mx-auto" width="600" height="300">
      <v-responsive class="mx-auto" max-width="340">
        <v-text-field v-model="loginData.id" label="User ID" hide-details="auto" />
        <v-text-field v-model="loginData.password" label="User Password" type="password" hint="Enter your password to access this website" />
        <v-btn variant="tonal" block @click="loginAction">Login</v-btn>
      </v-responsive>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { Login } from '@/store/mutation-types'
import { login } from '@/utils/auth'
import { ILoginData } from '@/types/auth'

const store = useStore()

const router = useRouter()

const loginData = reactive<ILoginData>({
  id: '',
  password: '',
})

const loginAction = () => {
  login(loginData)
  router.push('/')
}
</script>

<style scoped>
.Login {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
