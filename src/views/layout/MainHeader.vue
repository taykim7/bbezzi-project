<template>
  <div class="header" v-if="showBack || showLogout">
    <div v-if="showBack" class="header-back">
      <img
        @click="moveBackPage"
        class="back-btn"
        src="../../assets/img/svg/icon_back.svg"
        height="25"
      />
    </div>
    <div v-if="showLogout" class="header-logout">
      <button class="logout-btn" @click="tryLogOut">로그아웃</button>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

import { useLogin } from '@/composables/login'
const { logOut } = useLogin()

const route = useRoute()
const router = useRouter()

const showBack = computed(() => {
  return route.meta.back
})
const showLogout = computed(() => {
  return route.meta.logout
})

// 뒤로가기
const moveBackPage = () => {
  router.back()
}

// 로그아웃
const tryLogOut = async () => {
  await logOut().then((response) => {
    if (response) {
      router.push({
        path: '/'
      })
    }
  })
}
</script>

<style scoped>
/* 뒤로가기 */
.header .header-back {
  position: fixed;
  top: 3rem;
  left: 3rem;
}
/* .header .header-back .back-btn {
} */
/* 로그아웃 */
.header .header-logout {
  position: fixed;
  top: 3rem;
  right: 3rem;
}
.header .header-logout .logout-btn {
  color: #848383;
  font-size: 15px;
  font-weight: 400;
  width: 100%;
}
</style>
