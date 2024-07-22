<template>
  <div class="join">
    <div class="title">회원가입</div>

    <!-- 입력 항목 -->
    <div class="input-wrap">
      <div class="input-items">
        <div class="mb40">
          <div class="input-title">아이디(이메일)</div>
          <div class="input-contents">
            <input type="text" class="input-item" placeholder="이메일 주소" />
            <button class="input-btn">중복확인</button>
          </div>
        </div>
        <div class="mb40">
          <div class="input-title">비밀번호</div>
          <div class="input-contents">
            <input type="text" class="input-item" placeholder="비밀번호" />
          </div>
        </div>
        <div class="mb40">
          <div class="input-title">비밀번호 확인</div>
          <div class="input-contents">
            <input type="text" class="input-item" placeholder="비밀번호 확인" />
          </div>
        </div>
        <div class="mb40">
          <div class="input-title">닉네임</div>
          <div class="input-contents">
            <input type="text" class="input-item" placeholder="닉네임" />
          </div>
        </div>
      </div>

      <!-- 체크 항목 -->
      <div class="check-items">
        <div class="mb4">
          <div class="check-all">
            <div>
              <input type="checkbox" id="all" name="check-all" checked />
              <label for="all">모두 동의합니다.</label>
            </div>
          </div>
        </div>
        <div class="mb4">
          <div class="check-item">
            <div>
              <input type="checkbox" id="check-1" name="check-1" checked />
              <label for="check-1">이용약관 동의</label>
            </div>
            <button class="check-btn">보기</button>
          </div>
        </div>
        <div class="mb4">
          <div class="check-item">
            <div>
              <input type="checkbox" id="check-2" name="check-2" checked />
              <label for="check-2">개인정보 처리방침 동의</label>
            </div>
            <button class="check-btn">보기</button>
          </div>
        </div>
      </div>
    </div>

    <!-- TODO 버튼 컴포넌트화 -->
    <button class="rectangle-108" @click="movePage">회원가입</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const movePage = () => {
  router.push({
    name: 'JoinSuccessPage'
  })
}
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
  font-family: 'Pretendard-ExtraBold', sans-serif;
  font-size: 20px;
  font-weight: 800;

  margin-top: 5rem;
  margin-bottom: 5rem;
}
.input-wrap {
  /* background-color: rgb(243, 255, 71); */
  width: 100%;
}
.input-wrap .input-items {
  padding: 0 30px 0 30px;
}
.input-wrap .input-items .input-title {
  color: #343434;
  text-align: left;
  font-family: 'Pretendard-SemiBold', sans-serif;
  font-size: 20px;
  font-weight: 600;

  margin-bottom: 10px;
}
.input-wrap .input-items .input-contents {
  display: flex;
  justify-content: space-between;
}
.input-wrap .input-items .input-contents .input-item {
  color: #343434;
  text-align: left;
  font-family: 'Pretendard-Light', sans-serif;
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
.input-wrap .input-items .input-contents .input-btn {
  color: var(--gray4, #ff5353);
  font-family: var(--button-l-font-family, 'Pretendard-Bold', sans-serif);
  font-size: 15px;
  font-weight: 300;

  border-radius: 30px;
  border-style: solid;
  border-color: #ff5353;
  border-width: 1px;
  width: 130px;
  height: 35px;
}
.input-wrap .check-items {
  padding: 0 30px 0 30px;
}
.input-wrap .check-items .check-all {
}
.input-wrap .check-items .check-all input[type='checkbox'] + label {
  color: #bababa;
  text-align: left;
  font-family: 'Pretendard-SemiBold', sans-serif;
  font-size: 20px;
  font-weight: 600;
}
.input-wrap .check-items .check-all input[type='checkbox'] + label::before {
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
.input-wrap .check-items .check-all input[type='checkbox']:checked + label::before {
  background-color: #343434;
}
.input-wrap .check-items .check-item {
  display: flex;
  justify-content: space-between;
}
.input-wrap .check-items .check-item input[type='checkbox'] + label {
  color: #bababa;
  text-align: left;
  font-family: 'Pretendard-Light', sans-serif;
  font-size: 15px;
  font-weight: 300;
}
.input-wrap .check-items .check-item input[type='checkbox'] + label::before {
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
.input-wrap .check-items .check-item input[type='checkbox']:checked + label::before {
  background-color: #343434;
}
.input-wrap .check-items .check-item .check-btn {
  color: #343434;
  text-align: right;
  font-family: 'Pretendard-Light', sans-serif;
  font-size: 15px;
  font-weight: 300;
}
.rectangle-108 {
  background: #343434;
  border-radius: 5px;
  width: 329px;
  height: 58px;
  position: absolute;
  left: calc(50% - 164.5px);
  bottom: 128px;

  color: var(--gray4, #e8e8e8);
  text-align: center;
  font-family: var(--button-l-font-family, 'Pretendard-Bold', sans-serif);
  font-size: var(--button-l-font-size, 16px);
  font-weight: var(--button-l-font-weight, 700);
}
</style>
