<template>
  <div class="landing">
    <!-- 인트로 -->
    <IntroView />
    <!-- 스와이프 -->
    <LandingSwiper />
    <!-- 버튼 -->
    <C-Button
      singleMain
      useSub
      singleSub
      :titleBtnMain="'로그인'"
      :titleSubMain="'회원가입'"
      @btn-main="moveLoginPage"
      @sub-main="movePage"
    />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import IntroView from './intro/IntroView.vue'
import LandingSwiper from '@/components/LandingSwiper.vue'

const router = useRouter()
const movePage = () => {
  router.push({
    name: 'JoinPage'
  })
}
const moveLoginPage = () => {
  router.push({
    name: 'LoginPage'
  })
}
</script>

<style scoped>
.landing {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}
</style>
