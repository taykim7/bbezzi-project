<template>
  <div class="landing">
    <!-- 인트로 -->
    <div class="intro-logo">bbezzi</div>
    <div class="intro-text">
      <p>매일 체중을 기록하고,<br />시간에 따른 변화를 한눈에 확인하세요.</p>
    </div>

    <!-- 스와이프 -->
    <div class="swipe-wrap">
      <div class="swipe-img"></div>
      <div class="swipe-seq mt8">
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
.intro-logo {
  color: #343434;
  text-align: center;
  font-size: 60px;
  font-weight: 900;
}
.intro-text {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #343434;
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
