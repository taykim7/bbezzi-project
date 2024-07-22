<template>
  <div class="login">
    <div class="logo">bbezzi</div>
    <div class="intro-text">
      <p>매일 체중을 기록하고,<br />시간에 따른 변화를 한눈에 확인하세요.</p>
    </div>

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

    <!-- TODO 버튼 컴포넌트화 -->
    <div class="component-1">
      <div class="frame-34">
        <div class="group-42">
          <button class="rectangle-110">로그인</button>
        </div>
        <div class="group-43">
          <button class="btn-2">아이디 찾기</button>
          <button class="btn-4">비밀번호 찾기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.login {
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
.input-wrap {
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
.component-1 {
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-end;
  justify-content: center;
  width: 329px;
  position: absolute;
  bottom: 101px;
}
.frame-34 {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  width: 329px;
  position: absolute;
  left: calc(50% - 164.5px);
  bottom: 0px;
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
  width: 100%;
  height: 68.24%;
  position: absolute;
  right: 0%;
  left: 0%;
  bottom: 31.76%;
  top: 0%;

  color: var(--gray4, #e8e8e8);
  text-align: center;
  font-family: var(--button-l-font-family, 'Pretendard-Bold', sans-serif);
  font-size: var(--button-l-font-size, 16px);
  font-weight: var(--button-l-font-weight, 700);
}
.group-43 {
  flex-shrink: 0;
  width: 251px;
  height: 17px;
  position: static;
}
.btn-2 {
  color: var(--gray1, #343434);
  text-align: center;
  font-family: var(--button-m-font-family, 'Pretendard-Medium', sans-serif);
  font-size: var(--button-m-font-size, 14px);
  font-weight: var(--button-m-font-weight, 500);
  position: absolute;
  right: 68.69%;
  left: 11.85%;
  width: 30%;
  bottom: 0%;
  top: 80%;
  height: 20%;
}
.btn-4 {
  color: var(--gray1, #343434);
  text-align: center;
  font-family: var(--button-m-font-family, 'Pretendard-Medium', sans-serif);
  font-size: var(--button-m-font-size, 14px);
  font-weight: var(--button-m-font-weight, 500);
  position: absolute;
  right: 11.85%;
  left: 64.74%;
  width: 30%;
  bottom: 0%;
  top: 80%;
  height: 20%;
}
</style>
