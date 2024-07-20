<template>
  <div class="join-success">
    <div class="div">김테이님, 환영해요</div>
    <div class="div2">가입 완료!</div>
    <div class="component-1">
      <div class="group-42">
        <button class="rectangle-110" @click="movePage">시작하기</button>
        <!-- <div class="btn-1">시작하기</div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const movePage = () => {
  router.push({
    name: 'LoginPage'
  })
}
</script>

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

.join-success,
.join-success * {
  box-sizing: border-box;
}
.join-success {
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
  position: absolute;
  left: calc(50% - 164.5px);
  bottom: 128px;
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
  right: 0%;
  left: 0%;
  bottom: 0%;
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
  right: 41.64%;
  left: 41.34%;
  width: 17.02%;
  bottom: 32.76%;
  top: 34.48%;
  height: 32.76%;
}
.div {
  color: #343434;
  text-align: center;
  font-family: 'Pretendard-Bold', sans-serif;
  font-size: 30px;
  font-weight: 700;
  position: absolute;
  left: calc(50% - 111.5px);
  top: calc(50% - 207px);
}
.div2 {
  color: #ff5353;
  text-align: center;
  font-family: 'Pretendard-Medium', sans-serif;
  font-size: 20px;
  font-weight: 500;
  position: absolute;
  left: calc(50% - 40.5px);
  top: calc(50% - 238px);
}
</style>
