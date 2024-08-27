<template>
  <div class="login">
    <!-- 인트로 -->
    <IntroView />
    <!-- 입력 항목 -->
    <div class="input-wrap">
      <C-Input v-model="email" :title="'이메일'" :placeholder="'이메일 주소를 입력해 주세요.'" />
      <C-Input
        v-model="pw"
        :type="'password'"
        :title="'비밀번호'"
        :placeholder="'비밀번호를 입력해 주세요.'"
      />
    </div>

    <!-- 버튼 -->
    <C-Button
      singleMain
      useSub
      :titleBtnMain="'로그인'"
      :titleSubLeft="'아이디 찾기'"
      :titleSubRight="'비밀번호 찾기'"
      @btn-main="onLogin(email, pw)"
      @sub-left="movePage"
      @sub-right="movePage"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import IntroView from './intro/IntroView.vue'
import { useLogin } from '@/composables/login'
const router = useRouter()
const { logIn } = useLogin()

const email = ref('')
const pw = ref('')

// 로그인
async function onLogin(email, pw) {
  if (await logIn(email, pw)) {
    // 홈으로 이동
    router.push({
      path: '/main/gram'
    })
  }
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
