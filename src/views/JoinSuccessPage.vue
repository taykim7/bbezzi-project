<template>
  <div class="join-success">
    <div class="welcome-text">
      <p>김테이님, 환영해요</p>
      <h1>가입 완료!</h1>
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
.join-success {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.welcome-text {
  text-align: center;
}
.welcome-text > p {
  color: #ff5353;
  font-size: 2rem;
  font-weight: 500;
}
.welcome-text > h1 {
  color: #343434;
  font-size: 3rem;
  font-weight: 700;
}
</style>
