<template>
  <div v-if="showBack || showLogout" class="header">
    <div v-if="showBack" class="header-back">
      <img @click="moveBackPage" class="back-btn" src="../assets/logo.svg" />
    </div>
    <div v-if="showLogout" class="header-logout">
      <button class="logout-btn" @click="moveLandingPage">로그아웃</button>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

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
const moveLandingPage = () => {
  router.push({
    path: '/'
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
