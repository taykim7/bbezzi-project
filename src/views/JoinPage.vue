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
  font-size: 20px;
  font-weight: 800;

  margin-top: 10rem;
  margin-bottom: 5rem;
}
.input-wrap {
  width: 100%;
}
.input-wrap .input-items .input-title {
  color: #343434;
  text-align: left;
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
  font-size: 15px;
  font-weight: 300;

  border-radius: 30px;
  border-style: solid;
  border-color: #ff5353;
  border-width: 1px;
  width: 130px;
  height: 35px;
}
.input-wrap .check-items .check-all input[type='checkbox'] + label {
  color: #bababa;
  text-align: left;
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
  font-size: 15px;
  font-weight: 300;
}
</style>
