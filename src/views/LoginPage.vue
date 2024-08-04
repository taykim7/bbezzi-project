<template>
  <div class="login">
    <!-- 인트로 -->
    <IntroView />
    <!-- 입력 항목 -->
    <div class="input-wrap">
      <div class="input-items">
        <div class="mb40">
          <div class="input-title">아이디(이메일)</div>
          <div class="input-contents">
            <input type="text" class="input-item" placeholder="이메일 주소" />
          </div>
        </div>
        <div class="mb40">
          <div class="input-title">비밀번호</div>
          <div class="input-contents">
            <input type="text" class="input-item" placeholder="비밀번호" />
          </div>
        </div>
      </div>
    </div>

    <!-- 버튼 -->
    <div class="btn-wrap">
      <div class="btn-items">
        <div class="btn-item">
          <button class="btn-main" @click="movePage">로그인</button>
          <div class="btn-two">
            <button class="btn-left">아이디 찾기</button>
            <button class="btn-right">비밀번호 찾기</button>
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
    path: '/main/gram'
  })
}
</script>

<style scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.input-wrap {
  width: 100%;
}
.input-wrap .input-items .input-title {
  color: #343434;
  text-align: left;
  font-size: 20px;
  font-weight: 600;
}
.input-wrap .input-items .input-contents {
  display: flex;
  justify-content: space-between;
}
.input-wrap .input-items .input-contents .input-item {
  color: #343434;
  text-align: left;
  font-size: 15px;
  font-weight: 600;

  border-width: 0 0 1px;
  background: transparent;
  width: 100%;
  padding: 5px 0 5px 0;
}
.input-wrap .input-items .input-contents .input-item::placeholder {
  color: #bababa;
}
</style>
