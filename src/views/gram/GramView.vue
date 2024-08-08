<template>
  <div class="gram-wrap">
    <div class="gram-title mb4">
      <div class="gram-text">체중</div>
      <div class="gram-date">2024-07-01 금요일</div>
    </div>
    <div class="gram-input mb32">
      <div class="gram-unit">kg</div>
      <div class="gram-gram">
        <p>
          {{ gram.join('') }}
        </p>
      </div>
    </div>
  </div>

  <!-- 키패드 -->
  <div class="keypad-wrap mb32">
    <div class="keypad-row">
      <button class="keypad-num" @click="add('1')">1</button>
      <button class="keypad-num" @click="add('2')">2</button>
      <button class="keypad-num" @click="add('3')">3</button>
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
      <button class="keypad-num" @click="add('4')">4</button>
      <button class="keypad-num" @click="add('5')">5</button>
      <button class="keypad-num" @click="add('6')">6</button>
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
      <button class="keypad-num" @click="add('7')">7</button>
      <button class="keypad-num" @click="add('8')">8</button>
      <button class="keypad-num" @click="add('9')">9</button>
      <button class="keypad-num" @click="add('0')">0</button>
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
  <C-Button singleMain :titleBtnMain="'등록하기'" @btn-main="test" />
  <!-- <C-Button
    :titleBtnLeft="'수정하기'"
    :titleBtnRight="'삭제하기'"
    @btn-left="test"
    @btn-right="test"
  /> -->
</template>

<script setup>
import { onMounted, ref } from 'vue'
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

// 몸무게
const gram = ref(['0', '.', '0'])

// 숫자 입력
function add(numString) {
  gram.value[2] = numString
  // if ('0' === payAmount.value) {
  //   payAmount.value = '00' === numString ? '0' : numString;
  // } else {
  //   payAmount.value += numString;
  // }

  // // 12자리까지 제한
  // if (PAY_AMOUNT_MAX_LENGTH < payAmount.value.length) {
  //   payAmount.value = payAmount.value.substring(0, PAY_AMOUNT_MAX_LENGTH);
  // }
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
  display: flex;
  justify-content: center;
  align-items: center;

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
  width: 70px;
  height: 70px;
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
  width: 70px;
  height: 70px;
  border-radius: 5rem;
}
</style>
