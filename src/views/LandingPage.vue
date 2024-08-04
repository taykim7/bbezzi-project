<template>
  <div class="landing">
    <!-- 인트로 -->
    <IntroView />
    <!-- 스와이프 -->
    <div class="swipe-wrap">
      <div class="swipe-img mb8"></div>
      <div class="swipe-seq">
        <div class="swipe-item"></div>
        <div class="swipe-item-now"></div>
        <div class="swipe-item"></div>
        <div class="swipe-item"></div>
      </div>
    </div>

    <!-- 버튼 -->
    <div class="btn-wrap">
      <div class="btn-items">
        <div class="btn-item">
          <button class="btn-main" @click="moveLoginPage">로그인</button>
          <div class="btn-one">
            <button class="btn-center" @click="movePage">회원가입</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import IntroView from './intro/IntroView.vue'

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

/* 스와이프 */
.swipe-wrap {
  width: 100%;
}
.swipe-wrap .swipe-img {
  background-color: #d9d9d9;
  width: 100%;
  height: 35rem;
}

.swipe-wrap .swipe-seq {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.swipe-wrap .swipe-seq .swipe-item {
  background: #d9d9d9;
  border-radius: 10px;
  width: 13px;
  height: 13px;
}
.swipe-wrap .swipe-seq .swipe-item-now {
  background: #343434;
  border-radius: 10px;
  width: 32px;
  height: 13px;
}
</style>
