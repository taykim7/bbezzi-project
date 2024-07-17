<template>
  <div class="join">
    <div class="div2">회원가입</div>

    <div class="div10">아이디(이메일)</div>
    <!-- <div class="div9">이메일 주소</div> -->
    <input type="text" class="div9" placeholder="이메일 주소" />
    <img class="vector-3" src="../html/vector-30.svg" />
    <!-- <div class="div11">중복확인</div> -->
    <!-- <div class="rectangle-111"></div> -->
    <button class="rectangle-111">중복확인</button>

    <div class="div4">비밀번호</div>
    <!-- <div class="div3">비밀번호</div> -->
    <input type="text" class="div3" placeholder="비밀번호" />
    <img class="vector-4" src="../html/vector-40.svg" />

    <div class="div6">비밀번호 확인</div>
    <!-- <div class="div5">비밀번호 확인</div> -->
    <input type="text" class="div5" placeholder="비밀번호 확인" />
    <img class="vector-5" src="../html/vector-50.svg" />

    <div class="div8">닉네임</div>
    <!-- <div class="div7">닉네임을 입력하세요</div> -->
    <input type="text" class="div7" placeholder="닉네임을 입력하세요" />
    <img class="vector-6" src="../html/vector-60.svg" />

    <!-- <div class="rectangle-112"></div> -->
    <div class="div16">
      <input type="checkbox" id="1" name="scales" checked />
      <label for="1">모두 동의합니다.</label>
    </div>

    <!-- <div class="rectangle-113"></div> -->
    <div class="div12">
      <input type="checkbox" id="2" name="scales" checked />
      <label for="2">이용약관 동의</label>
    </div>
    <img class="vector" src="../html/vector0.svg" />
    <button class="div15">보기</button>

    <!-- <div class="rectangle-114"></div> -->
    <div class="div13">
      <input type="checkbox" id="3" name="scales" checked />
      <label for="3">개인정보 처리방침 동의</label>
    </div>
    <img class="vector2" src="../html/vector1.svg" />
    <button class="div14">보기</button>

    <button class="rectangle-108">회원가입</button>
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

.join,
.join * {
  box-sizing: border-box;
}
.join {
  background: #f2efe7;
  height: 852px;
  position: relative;
  overflow: hidden;
}
.group-31 {
  position: absolute;
  inset: 0;
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
.group-2 {
  position: absolute;
  inset: 0;
}
.div2 {
  color: #343434;
  text-align: center;
  font-family: 'Pretendard-ExtraBold', sans-serif;
  font-size: 20px;
  font-weight: 800;
  position: absolute;
  left: calc(50% - 35.5px);
  top: calc(50% - 336px);
}
.group-5 {
  position: absolute;
  inset: 0;
}
.div3 {
  color: #bababa;
  text-align: left;
  font-family: 'Pretendard-Light', sans-serif;
  font-size: 15px;
  font-weight: 300;
  position: absolute;
  left: calc(50% - 164.5px);
  top: calc(50% - 122px);

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
  top: calc(50% - 162px);
}
.vector-4 {
  width: 329px;
  height: 0px;
  position: absolute;
  left: calc(50% - 164.5px);
  top: calc(50% - 97px);
  overflow: visible;
}
.group-6 {
  position: absolute;
  inset: 0;
}
.div5 {
  color: #bababa;
  text-align: left;
  font-family: 'Pretendard-Light', sans-serif;
  font-size: 15px;
  font-weight: 300;
  position: absolute;
  left: calc(50% - 164.5px);
  top: calc(50% - 29px);

  border-width: 0 0 1px;
  background: transparent;
}
.div5::placeholder {
  color: #bababa;
  text-align: left;
  font-family: 'Pretendard-Light', sans-serif;
  font-size: 15px;
  font-weight: 300;
  position: absolute;
}
.div6 {
  color: #343434;
  text-align: left;
  font-family: 'Pretendard-SemiBold', sans-serif;
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  left: calc(50% - 164.5px);
  top: calc(50% - 69px);
}
.vector-5 {
  width: 329px;
  height: 0px;
  position: absolute;
  left: calc(50% - 164.5px);
  top: calc(50% - 4px);
  overflow: visible;
}
.group-7 {
  position: absolute;
  inset: 0;
}
.div7 {
  color: #bababa;
  text-align: left;
  font-family: 'Pretendard-Light', sans-serif;
  font-size: 15px;
  font-weight: 300;
  position: absolute;
  left: calc(50% - 164.5px);
  top: calc(50% - -64px);

  border-width: 0 0 1px;
  background: transparent;
}
.div7::placeholder {
  color: #bababa;
  text-align: left;
  font-family: 'Pretendard-Light', sans-serif;
  font-size: 15px;
  font-weight: 300;
  position: absolute;
}
.div8 {
  color: #343434;
  text-align: left;
  font-family: 'Pretendard-SemiBold', sans-serif;
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  left: calc(50% - 164.5px);
  top: calc(50% - -24px);
}
.vector-6 {
  width: 329px;
  height: 0px;
  position: absolute;
  left: calc(50% - 164.5px);
  top: calc(50% - -89px);
  overflow: visible;
}
.group-4 {
  position: absolute;
  inset: 0;
}
.div9 {
  color: #bababa;
  text-align: left;
  font-family: 'Pretendard-Light', sans-serif;
  font-size: 15px;
  font-weight: 300;
  position: absolute;
  left: calc(50% - 164.5px);
  top: calc(50% - 215px);

  border-width: 0 0 1px;
  background: transparent;
}
.div9::placeholder {
  color: #bababa;
  text-align: left;
  font-family: 'Pretendard-Light', sans-serif;
  font-size: 15px;
  font-weight: 300;
  position: absolute;
}
.div10 {
  color: #343434;
  text-align: left;
  font-family: 'Pretendard-SemiBold', sans-serif;
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  left: calc(50% - 164.5px);
  top: calc(50% - 255px);
}
.vector-3 {
  width: 240px;
  height: 0px;
  position: absolute;
  left: calc(50% - 164.5px);
  top: calc(50% - 190px);
  overflow: visible;
}
.rectangle-111 {
  border-radius: 30px;
  border-style: solid;
  border-color: #ff5353;
  border-width: 1px;
  width: 88px;
  height: 35px;
  position: absolute;
  left: calc(50% - -76.5px);
  top: calc(50% - 225px);

  color: var(--gray4, #ff5353);
  text-align: center;
  font-family: var(--button-l-font-family, 'Pretendard-Bold', sans-serif);
  font-size: 15px;
  font-weight: 300;
}
.group-8 {
  position: absolute;
  inset: 0;
}
.div12 input[type='checkbox'] + label {
  color: #bababa;
  text-align: left;
  font-family: 'Pretendard-Light', sans-serif;
  font-size: 15px;
  font-weight: 300;
  position: absolute;
  left: calc(50% - 146.5px);
  top: calc(50% - -157px);
}
.div12 input[type='checkbox'] + label::before {
  content: '';
  border-radius: 10px;
  border-style: solid;
  border-color: #bababa;
  border-width: 1px;
  width: 12px;
  height: 12px;

  position: absolute;
  left: -22px;
  top: 6px;
  /* left: calc(50% - 164.5px);
  top: calc(50% - -123px); */
}
.div12 input[type='checkbox']:checked + label::before {
  background-color: red;
}
.div13 input[type='checkbox'] + label {
  color: #bababa;
  text-align: left;
  font-family: 'Pretendard-Light', sans-serif;
  font-size: 15px;
  font-weight: 300;
  position: absolute;
  left: calc(50% - 146.5px);
  top: calc(50% - -182px);
}
.div13 input[type='checkbox'] + label::before {
  content: '';
  border-radius: 10px;
  border-style: solid;
  border-color: #bababa;
  border-width: 1px;
  width: 12px;
  height: 12px;

  position: absolute;
  left: -22px;
  top: 6px;
  /* left: calc(50% - 164.5px);
  top: calc(50% - -123px); */
}
.div13 input[type='checkbox']:checked + label::before {
  background-color: red;
}
.div14 {
  color: #343434;
  text-align: right;
  font-family: 'Pretendard-Light', sans-serif;
  font-size: 15px;
  font-weight: 300;
  position: absolute;
  left: calc(50% - -124.5px);
  top: calc(50% - -182px);
}
.div15 {
  color: #343434;
  text-align: right;
  font-family: 'Pretendard-Light', sans-serif;
  font-size: 15px;
  font-weight: 300;
  position: absolute;
  left: calc(50% - -124.5px);
  top: calc(50% - -157px);
}
.div16 input[type='checkbox'] + label {
  color: #343434;
  text-align: left;
  font-family: 'Pretendard-SemiBold', sans-serif;
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  left: calc(50% - 146.5px);
  top: calc(50% - -117px);
}
.div16 input[type='checkbox'] + label::before {
  content: '';
  border-radius: 10px;
  border-style: solid;
  border-color: #343434;
  border-width: 1px;
  width: 12px;
  height: 12px;

  position: absolute;
  left: -22px;
  top: 6px;
  /* left: calc(50% - 164.5px);
  top: calc(50% - -123px); */
}
.div16 input[type='checkbox']:checked + label::before {
  background-color: red;
}
/* .rectangle-112 {
  border-radius: 10px;
  border-style: solid;
  border-color: #343434;
  border-width: 1px;
  width: 12px;
  height: 12px;
  position: absolute;
  left: calc(50% - 164.5px);
  top: calc(50% - -123px);
} */
/* .rectangle-113 {
  border-radius: 10px;
  border-style: solid;
  border-color: #bababa;
  border-width: 1px;
  width: 12px;
  height: 12px;
  position: absolute;
  left: calc(50% - 164.5px);
  top: calc(50% - -160px);
} */
/* .rectangle-114 {
  border-radius: 10px;
  border-style: solid;
  border-color: #bababa;
  border-width: 1px;
  width: 12px;
  height: 12px;
  position: absolute;
  left: calc(50% - 164.5px);
  top: calc(50% - -185px);
} */
.vector {
  width: 6px;
  height: 10px;
  position: absolute;
  left: calc(50% - -161.5px);
  top: calc(50% - -196px);
  overflow: visible;
}
.vector2 {
  width: 6px;
  height: 10px;
  position: absolute;
  left: calc(50% - -161.5px);
  top: calc(50% - -171px);
  overflow: visible;
}
</style>
