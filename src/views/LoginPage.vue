<template>
  <div class="login">
    <!-- 인트로 -->
    <IntroView />
    <!-- 입력 항목 -->
    <div class="input-wrap">
      <C-Input
        v-model="email"
        :title="'아이디(이메일)'"
        :placeholder="'이메일 주소를 입력해 주세요.'"
      />
      <C-Input v-model="password" :title="'비밀번호'" :placeholder="'비밀번호를 입력해 주세요.'" />
    </div>

    <!-- 버튼 -->
    <C-Button
      singleMain
      useSub
      :titleBtnMain="'로그인'"
      :titleSubLeft="'아이디 찾기'"
      :titleSubRight="'비밀번호 찾기'"
      @btn-main="movePage"
      @sub-left="test"
      @sub-right="test"
    />
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
const email = ''
const password = ''
// 버튼 테스트
const test = () => {
  console.log('테스트')
}
</script>

<style scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
