<template>
  <div class="gram-wrap">
    <div class="gram-title mb4">
      <div class="gram-text">체중</div>
      <div class="gram-date">2024-07-01 금요일</div>
    </div>
    <div class="gram-input mb32">
      <div class="gram-unit">kg</div>
      <input class="gram-gram" value="68.5" />
    </div>
  </div>

  <!-- 키패드 -->
  <div class="keypad-wrap mb32">
    <div class="keypad-row">
      <button class="keypad-num">1</button>
      <button class="keypad-num">2</button>
      <button class="keypad-num">3</button>
      <button class="keypad-else">
        <img
          class="input-btn-icon"
          src="../../assets/img/svg/icon_clear.svg"
          height="40"
          alt="전체제거"
        />
      </button>
    </div>
    <div class="keypad-row mb8 mt8">
      <button class="keypad-num">4</button>
      <button class="keypad-num">5</button>
      <button class="keypad-num">6</button>
      <button class="keypad-else">
        <img
          class="input-btn-icon"
          src="../../assets/img/svg/icon_cancel.svg"
          height="40"
          alt="지우기"
        />
      </button>
    </div>
    <div class="keypad-row">
      <button class="keypad-num">7</button>
      <button class="keypad-num">8</button>
      <button class="keypad-num">9</button>
      <button class="keypad-else">.</button>
    </div>
  </div>

  <!-- textarea -->
  <div class="input-wrap mb100">
    <div class="input-items">
      <div class="mb40">
        <C-Input
          v-model="memo"
          :type="'textarea'"
          :title="'메모'"
          :placeholder="'메모를 입력하세요'"
        />
      </div>
    </div>
  </div>

  <!-- 버튼 -->
  <!-- <C-Button singleMain @btn-main="test" /> -->
  <C-Button
    :titleBtnLeft="'수정하기'"
    :titleBtnRight="'삭제하기'"
    @btn-left="test"
    @btn-right="test"
  />
</template>

<script setup>
import { onMounted } from 'vue'
onMounted(() => document.querySelector('textarea').addEventListener('keydown', autosize))
function autosize() {
  const el = document.querySelector('textarea')
  el.style.cssText = 'height:' + el.scrollHeight + 'px'
}
const memo = ''
// 버튼 테스트
const test = () => {
  console.log('테스트')
}
</script>

<style scoped>
/* 체중 */
.gram-wrap {
  width: 100%;
}
.gram-wrap .gram-title {
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
}
.gram-wrap .gram-title .gram-text {
  color: #343434;
  text-align: left;
  font-size: 20px;
  font-weight: 600;
}
.gram-wrap .gram-title .gram-date {
  color: #343434;
  text-align: right;
  font-size: 15px;
  font-weight: 400;
}
.gram-wrap .gram-input {
  position: relative;
}
.gram-wrap .gram-input .gram-unit {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  right: 1rem;
  color: #848383;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
}
.gram-wrap .gram-input .gram-gram {
  color: #848383;
  background-color: #343434;
  text-align: center;

  font-size: 40px;
  font-weight: 400;

  width: 100%;
  height: 60px;
  border: 0;
  border-radius: 5px;
}
/* 키패드 */
.keypad-wrap {
  width: 100%;
}
.keypad-wrap .keypad-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.keypad-wrap .keypad-row .keypad-num {
  color: #343434;
  text-align: center;
  font-size: 35px;
  font-weight: 400;
  background-color: #ffffff;
  width: 10rem;
  height: 10rem;
  border-radius: 5rem;
}
.keypad-wrap .keypad-row .keypad-else {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #343434;
  text-align: center;
  font-size: 35px;
  font-weight: 400;
  background-color: #fff9eb;
  width: 10rem;
  height: 10rem;
  border-radius: 5rem;
}
</style>
