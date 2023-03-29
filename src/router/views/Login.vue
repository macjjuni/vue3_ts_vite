<template>
  <div class="Login">
    <v-text-field v-model="loginData.id" data-flag="userId" label="아이디" />
    <v-text-field v-model="loginData.password" label="비밀번호" data-flag="userPW" type="password" />
    <v-btn @click="loginAction">Button</v-btn>
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
