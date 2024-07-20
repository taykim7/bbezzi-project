<template>
  <div class="login">
    <div class="bbezzi">bbezzi</div>
    <div class="div6">매일 체중을 기록하고,</div>
    <div class="div5">시간에 따른 변화를 한눈에 확인하세요.</div>
    <div class="div4">아이디(이메일)</div>
    <!-- <div class="div3">이메일 주소</div> -->
    <input type="text" class="div3" placeholder="이메일 주소" />
    <img class="vector-4" src="/src/assets/html/3_login/vector-40.svg" />
    <div class="div2">비밀번호</div>
    <!-- <div class="div">비밀번호</div> -->
    <input type="text" class="div" placeholder="비밀번호" />
    <img class="vector-5" src="/src/assets/html/3_login/vector-50.svg" />
    <div class="component-1">
      <div class="frame-34">
        <div class="group-42">
          <button class="rectangle-110">로그인</button>
          <!-- <div class="btn-1">로그인</div> -->
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
/* Figma Styles of your File */
:root {
  /* Colors */
  --background: #f2efe7;
  --red: #ee5600;
  --gray1: #343434;
  --gray2: #707070;
  --gray3: #acacac;
  --gray4: #e8e8e8;

  /* Fonts */
  --headline-l-font-family: Pretendard-Bold, sans-serif;
  --headline-l-font-size: 30px;
  --headline-l-line-height: normal;
  --headline-l-font-weight: 700;
  --headline-l-font-style: normal;
  --headline-m-font-family: Pretendard-Bold, sans-serif;
  --headline-m-font-size: 22px;
  --headline-m-line-height: normal;
  --headline-m-font-weight: 700;
  --headline-m-font-style: normal;
  --headline-s-font-family: Pretendard-Bold, sans-serif;
  --headline-s-font-size: 20px;
  --headline-s-line-height: normal;
  --headline-s-font-weight: 700;
  --headline-s-font-style: normal;
  --title-l-font-family: Pretendard-Bold, sans-serif;
  --title-l-font-size: 17px;
  --title-l-line-height: normal;
  --title-l-font-weight: 700;
  --title-l-font-style: normal;
  --title-m-font-family: Pretendard-Bold, sans-serif;
  --title-m-font-size: 15px;
  --title-m-line-height: normal;
  --title-m-font-weight: 700;
  --title-m-font-style: normal;
  --body-l-font-family: Pretendard-Medium, sans-serif;
  --body-l-font-size: 17px;
  --body-l-line-height: normal;
  --body-l-font-weight: 500;
  --body-l-font-style: normal;
  --body-m-font-family: Pretendard-Medium, sans-serif;
  --body-m-font-size: 15px;
  --body-m-line-height: normal;
  --body-m-font-weight: 500;
  --body-m-font-style: normal;
  --body-s-font-family: Pretendard-Medium, sans-serif;
  --body-s-font-size: 14px;
  --body-s-line-height: normal;
  --body-s-font-weight: 500;
  --body-s-font-style: normal;
  --button-l-font-family: Pretendard-Bold, sans-serif;
  --button-l-font-size: 16px;
  --button-l-line-height: normal;
  --button-l-font-weight: 700;
  --button-l-font-style: normal;
  --button-m-font-family: Pretendard-Medium, sans-serif;
  --button-m-font-size: 14px;
  --button-m-line-height: normal;
  --button-m-font-weight: 500;
  --button-m-font-style: normal;
  --caption-l-font-family: Pretendard-Bold, sans-serif;
  --caption-l-font-size: 13px;
  --caption-l-line-height: normal;
  --caption-l-font-weight: 700;
  --caption-l-font-style: normal;
  --caption-m-font-family: Pretendard-Medium, sans-serif;
  --caption-m-font-size: 12px;
  --caption-m-line-height: normal;
  --caption-m-font-weight: 500;
  --caption-m-font-style: normal;

  /* Effects */
}

.login,
.login * {
  box-sizing: border-box;
}
.login {
  background: #f2efe7;
  height: 852px;
  position: relative;
  overflow: hidden;
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
  left: calc(50% - 164.5px);
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
.btn-1 {
  color: var(--gray4, #e8e8e8);
  text-align: center;
  font-family: var(--button-l-font-family, 'Pretendard-Bold', sans-serif);
  font-size: var(--button-l-font-size, 16px);
  font-weight: var(--button-l-font-weight, 700);
  position: absolute;
  right: 43.77%;
  left: 43.47%;
  width: 12.77%;
  bottom: 54.12%;
  top: 23.53%;
  height: 22.35%;
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
.group-6 {
  position: absolute;
  inset: 0;
}
.vector-5 {
  width: 329px;
  height: 0px;
  position: absolute;
  left: calc(50% - 164.5px);
  top: calc(50% - -196px);
  overflow: visible;
}
.div {
  color: #bababa;
  text-align: left;
  font-family: 'Pretendard-Light', sans-serif;
  font-size: 15px;
  font-weight: 300;
  position: absolute;
  left: calc(50% - 164.5px);
  top: calc(50% - -171px);

  border-width: 0 0 1px;
  background: transparent;
}
.div::placeholder {
  color: #bababa;
  text-align: left;
  font-family: 'Pretendard-Light', sans-serif;
  font-size: 15px;
  font-weight: 300;
  position: absolute;
}
.div2 {
  color: #343434;
  text-align: left;
  font-family: 'Pretendard-SemiBold', sans-serif;
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  left: calc(50% - 164.5px);
  top: calc(50% - -131px);
}
.group-5 {
  position: absolute;
  inset: 0;
}
.vector-4 {
  width: 329px;
  height: 0px;
  position: absolute;
  left: calc(50% - 164.5px);
  top: calc(50% - -103px);
  overflow: visible;
}
.div3 {
  color: #bababa;
  text-align: left;
  font-family: 'Pretendard-Light', sans-serif;
  font-size: 15px;
  font-weight: 300;
  position: absolute;
  left: calc(50% - 164.5px);
  top: calc(50% - -78px);

  border-width: 0 0 1px;
  background: transparent;
}
.div3::placeholder {
  color: #bababa;
  text-align: left;
  font-family: 'Pretendard-Light', sans-serif;
  font-size: 15px;
  font-weight: 300;
  position: absolute;
}
.div4 {
  color: #343434;
  text-align: left;
  font-family: 'Pretendard-SemiBold', sans-serif;
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  left: calc(50% - 164.5px);
  top: calc(50% - -38px);
}
.div5 {
  color: #343434;
  text-align: center;
  font-family: var(--headline-m-font-family, 'Pretendard-Bold', sans-serif);
  font-size: var(--headline-m-font-size, 22px);
  font-weight: var(--headline-m-font-weight, 700);
  position: absolute;
  left: calc(50% - 165.5px);
  top: 284px;
}
.div6 {
  color: #343434;
  text-align: center;
  font-family: var(--headline-m-font-family, 'Pretendard-Bold', sans-serif);
  font-size: var(--headline-m-font-size, 22px);
  font-weight: var(--headline-m-font-weight, 700);
  position: absolute;
  left: calc(50% - 93.5px);
  top: 253px;
}
.bbezzi {
  color: #343434;
  text-align: center;
  font-family: 'Pretendard-Black', sans-serif;
  font-size: 60px;
  font-weight: 900;
  position: absolute;
  left: calc(50% - 97.5px);
  top: 172px;
}
</style>
