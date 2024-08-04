<template>
  <div class="welcome">
    <!-- 환영 -->
    <div class="welcome-wrap">
      <div class="welcome-text">
        <p>김테이님, 환영해요</p>
        <h1>가입 완료!</h1>
      </div>
      <div class="welcome-img"></div>
    </div>

    <!-- 버튼 -->
    <div class="btn-wrap">
      <div class="btn-items">
        <div class="btn-item">
          <button class="btn-main" @click="movePage">시작하기</button>
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
    name: 'LoginPage'
  })
}
</script>

<style scoped>
.welcome {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.welcome-wrap {
  width: 100%;
}
.welcome-wrap .welcome-text {
  text-align: center;
}
.welcome-wrap .welcome-text > p {
  color: #ff5353;
  font-size: 2rem;
  font-weight: 500;
}
.welcome-wrap .welcome-text > h1 {
  color: #343434;
  font-size: 3rem;
  font-weight: 700;
}
.welcome-wrap .welcome-img {
  background-color: #d9d9d9;
  width: 100%;
  height: 35rem;
}
</style>
