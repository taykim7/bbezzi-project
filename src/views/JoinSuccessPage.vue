<template>
  <div class="join-success">
    <div class="welcome-text">
      <p>김테이님, 환영해요</p>
      <h1>가입 완료!</h1>
    </div>

    <!-- TODO 버튼 컴포넌트화 -->
    <div class="component-1">
      <div class="group-42">
        <button class="rectangle-110" @click="movePage">시작하기</button>
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
}
.welcome-text {
  text-align: center;
  font-family: var(--headline-m-font-family, 'Pretendard-Bold', sans-serif);

  margin-top: 20rem;
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
.component-1 {
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  left: calc(50% - 164.5px);
  bottom: 111px;
}
.group-42 {
  flex-shrink: 0;
  width: 329px;
  height: 58px;
  position: static;
}
.rectangle-110 {
  background: var(--gray1, #343434);
  border-radius: 5px;
  width: 329px;
  height: 58px;
  position: absolute;
  right: 0%;
  left: 0%;
  bottom: 0%;
  top: 0%;

  color: var(--gray4, #e8e8e8);
  text-align: center;
  font-family: var(--button-l-font-family, 'Pretendard-Bold', sans-serif);
  font-size: var(--button-l-font-size, 16px);
  font-weight: var(--button-l-font-weight, 700);
}
.btn-1 {
  color: var(--gray4, #e8e8e8);
  text-align: center;
  font-family: var(--button-l-font-family, 'Pretendard-Bold', sans-serif);
  font-size: var(--button-l-font-size, 16px);
  font-weight: var(--button-l-font-weight, 700);
  position: absolute;
  right: 41.64%;
  left: 41.34%;
  width: 17.02%;
  bottom: 32.76%;
  top: 34.48%;
  height: 32.76%;
}
</style>
