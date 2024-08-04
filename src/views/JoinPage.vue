<template>
  <div class="join">
    <div class="title">회원가입</div>

    <!-- 회원가입 입력 항목 -->
    <div class="input-wrap">
      <div class="input-items">
        <C-Input
          v-model="email"
          :title="'아이디(이메일)'"
          :placeholder="'이메일 주소를 입력해 주세요.'"
          :doubleCheck="true"
        />
        <C-Input
          v-model="password"
          :title="'비밀번호'"
          :placeholder="'비밀번호를 입력해 주세요.'"
        />
        <C-Input
          v-model="passwordCheck"
          :title="'비밀번호 확인'"
          :placeholder="'비밀번호를 확인해 주세요.'"
        />
        <C-Input v-model="nickName" :title="'닉네임'" :placeholder="'닉네임을 입력해 주세요.'" />
      </div>
    </div>

    <!-- 회원가입 체크 항목 -->
    <div class="terms-wrap">
      <div class="terms-all">
        <div>
          <input type="checkbox" id="all" name="check-all" checked />
          <label for="all">모두 동의합니다.</label>
        </div>
      </div>
      <div class="terms-item">
        <div>
          <input type="checkbox" id="check-1" name="check-1" checked />
          <label for="check-1">이용약관 동의</label>
        </div>
        <button class="check-btn">보기</button>
      </div>
      <div class="terms-item">
        <div>
          <input type="checkbox" id="check-2" name="check-2" checked />
          <label for="check-2">개인정보 처리방침 동의</label>
        </div>
        <button class="check-btn">보기</button>
      </div>
    </div>

    <!-- 버튼 -->
    <div class="btn-wrap">
      <div class="btn-items">
        <div class="btn-item">
          <button class="btn-main" @click="movePage">회원가입</button>
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
    name: 'WelcomePage'
  })
}
const email = ''
const password = ''
const passwordCheck = ''
const nickName = ''
</script>

<style scoped>
.join {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.title {
  color: #343434;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
}
.terms-wrap {
  width: 100%;
}
/* 전체체크 */
.terms-wrap .terms-all input[type='checkbox'] + label {
  color: #bababa;
  text-align: left;
  font-size: 20px;
  font-weight: 600;
}
.terms-wrap .terms-all input[type='checkbox'] + label::before {
  content: '';
  border-radius: 10px;
  border-style: solid;
  border-color: #bababa;
  border-width: 1px;

  display: inline-block;
  width: 15px;
  height: 15px;

  margin-right: 10px;
}
.terms-wrap .terms-all input[type='checkbox']:checked + label::before {
  background-color: #343434;
}
/* 약관 */
.terms-wrap .terms-item {
  display: flex;
  justify-content: space-between;
}
.terms-wrap .terms-item input[type='checkbox'] + label {
  color: #bababa;
  text-align: left;
  font-size: 15px;
  font-weight: 300;
}
.terms-wrap .terms-item input[type='checkbox'] + label::before {
  content: '';
  border-radius: 10px;
  border-style: solid;
  border-color: #bababa;
  border-width: 1px;

  display: inline-block;
  width: 15px;
  height: 15px;

  margin-right: 10px;
}
.terms-wrap .terms-item input[type='checkbox']:checked + label::before {
  background-color: #343434;
}
.terms-wrap .terms-item .check-btn {
  color: #343434;
  text-align: right;
  font-size: 15px;
  font-weight: 300;
}
</style>
