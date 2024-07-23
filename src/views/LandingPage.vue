<template>
  <div class="landing">
    <div class="logo">bbezzi</div>
    <div class="intro-text">
      <p>매일 체중을 기록하고,<br />시간에 따른 변화를 한눈에 확인하세요.</p>
    </div>
    <!-- <div class="rectangle-103"></div>
    <div class="rectangle-104"></div>
    <div class="rectangle-106"></div>
    <div class="rectangle-107"></div> -->

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
}
.logo {
  color: #343434;
  text-align: center;
  font-family: 'Pretendard-Black', sans-serif;
  font-size: 60px;
  font-weight: 900;

  margin-top: 10rem;
}
.intro-text {
  text-align: center;
  font-family: var(--headline-m-font-family, 'Pretendard-Bold', sans-serif);
  font-size: 2rem;
  font-weight: var(--headline-m-font-weight, 700);
  color: #343434;

  margin-bottom: 10rem;
}

/* .rectangle-103 {
  background: #d9d9d9;
  border-radius: 10px;
  width: 13px;
  height: 13px;
  position: absolute;
  left: calc(50% - 44.5px);
  top: calc(50% - -174px);
}
.rectangle-104 {
  background: #343434;
  border-radius: 10px;
  width: 32px;
  height: 13px;
  position: absolute;
  left: calc(50% - 25.5px);
  top: calc(50% - -174px);
}
.rectangle-106 {
  background: #d9d9d9;
  border-radius: 10px;
  width: 13px;
  height: 13px;
  position: absolute;
  left: calc(50% - -12.5px);
  top: calc(50% - -174px);
}
.rectangle-107 {
  background: #d9d9d9;
  border-radius: 10px;
  width: 13px;
  height: 13px;
  position: absolute;
  left: calc(50% - -31.5px);
  top: calc(50% - -174px);
} */
</style>
