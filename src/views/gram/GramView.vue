<template>
  <div class="gram-wrap">
    <div class="gram-title mb4">
      <div class="gram-text">체중</div>
      <div class="gram-date">{{ displayDateProps.title }}</div>
    </div>
    <div class="gram-input mb32">
      <div class="gram-unit">kg</div>
      <div class="gram-gram">
        <p>
          {{ gram }}
        </p>
      </div>
    </div>
  </div>

  <!-- 키패드 -->
  <div class="keypad-wrap mb32" v-if="edit">
    <div class="keypad-row mb8">
      <button class="keypad-num" @click="add('1')">1</button>
      <button class="keypad-num" @click="add('2')">2</button>
      <button class="keypad-num" @click="add('3')">3</button>
      <button class="keypad-else" @click="clear">C</button>
    </div>
    <div class="keypad-row mb8">
      <button class="keypad-num" @click="add('4')">4</button>
      <button class="keypad-num" @click="add('5')">5</button>
      <button class="keypad-num" @click="add('6')">6</button>
      <button class="keypad-else" @click="cancel">
        <img
          class="input-btn-icon"
          src="../../assets/img/svg/icon_cancel_line.svg"
          height="40"
          alt="전체제거"
        />
      </button>
    </div>
    <div class="keypad-row mb8">
      <button class="keypad-num" @click="add('7')">7</button>
      <button class="keypad-num" @click="add('8')">8</button>
      <button class="keypad-num" @click="add('9')">9</button>
      <button class="keypad-else" @click="add('.')">.</button>
    </div>
    <div class="keypad-row">
      <div class="keypad-nothing"></div>
      <button class="keypad-num" @click="add('0')">0</button>
      <div class="keypad-nothing"></div>
      <div class="keypad-nothing"></div>
    </div>
    <!-- <div class="keypad-row">
      <button class="keypad-num" @click="add('7')">-1</button>
      <button class="keypad-num" @click="add('8')">-0.1</button>
      <button class="keypad-num" @click="add('9')">+0.1</button>
      <button class="keypad-else" @click="add('0')">+1</button>
    </div> -->
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
  <C-Button v-if="edit" singleMain :titleBtnMain="'등록하기'" @btn-main="registration" />
  <C-Button
    v-else
    :titleBtnLeft="'수정하기'"
    :titleBtnRight="'삭제하기'"
    @btn-left="test"
    @btn-right="test"
  />
</template>

<script setup>
import { ref } from 'vue'

// const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  displayDateProps: Object
})

const memo = ref('')
const gram = ref('0')
const edit = ref(false)

// 초기화
function clear() {
  gram.value = '0'
}

// 취소
function cancel() {
  if (gram.value.length > 1) {
    gram.value = gram.value.substring(0, gram.value.length - 1)
  } else if (gram.value.length === 1 && gram.value !== '0') {
    gram.value = '0'
  }
}

// 숫자 입력
function add(numString) {
  // 첫 입력
  if (gram.value === '0' && numString !== '.') {
    gram.value = ''
  }
  // 소수점이 없다면 세자리 제한
  if (!gram.value.includes('.') && numString !== '.' && gram.value.length > 2) {
    return ''
  }
  // 소수점이 이미 있다면 소수점 입력 취소
  if (gram.value.includes('.') && numString === '.') {
    return ''
  }
  // 일의 자리 - 소수점 한자리 수까지 제한
  if (gram.value.indexOf('.') === 1 && gram.value.length > 2) {
    gram.value = gram.value.substring(0, gram.value.length - 1)
  }
  // 십의 자리 - 소수점 한자리 수까지 제한
  if (gram.value.indexOf('.') === 2 && gram.value.length > 3) {
    gram.value = gram.value.substring(0, gram.value.length - 1)
  }
  // 백의 자리
  if (gram.value.length > 4) {
    gram.value = gram.value.substring(0, gram.value.length - 1)
  }
  gram.value += numString
  if (gram.value === '0.0') {
    gram.value = '0'
  }
}

// 등록
function registration() {
  console.log('검사')
  console.log(memo.value)
  console.log(gram.value)
  console.log(props.displayDateProps)
  edit.value = false
}

// 수정, 삭제
function test() {
  edit.value = true
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
  font-weight: 600;

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
.keypad-wrap .keypad-row .keypad-nothing {
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
