<template>
  <div class="landing">
    <div class="bbezzi">bbezzi</div>
    <div class="div">매일 체중을 기록하고,</div>
    <div class="div2">시간에 따른 변화를 한눈에 확인하세요.</div>
    <div class="rectangle-103"></div>
    <div class="rectangle-104"></div>
    <div class="rectangle-106"></div>
    <div class="rectangle-107"></div>
    <div class="component-1">
      <div class="group-42">
        <button class="rectangle-110">로그인</button>
        <!-- <div class="rectangle-110"></div> -->
        <!-- <div class="btn-1">로그인</div> -->
      </div>
      <button class="btn-3">회원가입</button>
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

.landing,
.landing * {
  box-sizing: border-box;
}
.landing {
  background: #f2efe7;
  width: 50%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.component-1 {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  width: 329px;
  position: absolute;
  left: calc(50% - 163.5px);
  bottom: 101px;
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
  left: calc(50% - 164.5px);
  top: calc(50% - 42.5px);

  color: var(--gray4, #e8e8e8);
  text-align: center;
  font-family: var(--button-l-font-family, 'Pretendard-Bold', sans-serif);
  font-size: var(--button-l-font-size, 16px);
  font-weight: var(--button-l-font-weight, 700);
}
/* .btn-1 {
  color: var(--gray4, #e8e8e8);
  text-align: center;
  font-family: var(--button-l-font-family, 'Pretendard-Bold', sans-serif);
  font-size: var(--button-l-font-size, 16px);
  font-weight: var(--button-l-font-weight, 700);
  position: absolute;
  right: 44.98%;
  left: 44.98%;
  width: 10.03%;
  bottom: 54.12%;
  top: 23.53%;
  height: 22.35%;
} */
.btn-3 {
  color: var(--gray1, #343434);
  text-align: center;
  font-family: var(--button-m-font-family, 'Pretendard-Medium', sans-serif);
  font-size: var(--button-m-font-size, 14px);
  font-weight: var(--button-m-font-weight, 500);
}
.bbezzi {
  color: #343434;
  text-align: center;
  font-family: 'Pretendard-Black', sans-serif;
  font-size: 60px;
  font-weight: 900;
  position: absolute;
  left: calc(50% - 98.5px);
  top: 172px;
}
.group-34 {
  position: absolute;
  inset: 0;
}
.div {
  color: #343434;
  text-align: center;
  font-family: var(--headline-m-font-family, 'Pretendard-Bold', sans-serif);
  font-size: var(--headline-m-font-size, 22px);
  font-weight: var(--headline-m-font-weight, 700);
  position: absolute;
  left: calc(50% - 94.5px);
  top: 253px;
}
.div2 {
  color: #343434;
  text-align: center;
  font-family: var(--headline-m-font-family, 'Pretendard-Bold', sans-serif);
  font-size: var(--headline-m-font-size, 22px);
  font-weight: var(--headline-m-font-weight, 700);
  position: absolute;
  left: calc(50% - 165.5px);
  top: 284px;
}
.group-3 {
  position: absolute;
  inset: 0;
}
.rectangle-103 {
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
}
</style>
