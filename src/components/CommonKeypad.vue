<template>
  <div class="keypad-wrap mb32">
    <div class="keypad-row mb4">
      <button class="keypad-num" @click="add('1')">1</button>
      <button class="keypad-num" @click="add('2')">2</button>
      <button class="keypad-num" @click="add('3')">3</button>
    </div>
    <div class="keypad-row mb4">
      <button class="keypad-num" @click="add('4')">4</button>
      <button class="keypad-num" @click="add('5')">5</button>
      <button class="keypad-num" @click="add('6')">6</button>
    </div>
    <div class="keypad-row mb4">
      <button class="keypad-num" @click="add('7')">7</button>
      <button class="keypad-num" @click="add('8')">8</button>
      <button class="keypad-num" @click="add('9')">9</button>
    </div>
    <div class="keypad-row">
      <button class="keypad-else" @click="add('.')">.</button>
      <button class="keypad-num" @click="add('0')">0</button>
      <button class="keypad-else" @click="cancel">
        <img
          class="input-btn-icon"
          src="@/assets/img/svg/icon_cancel_line.svg"
          height="30"
          alt="취소"
        />
      </button>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: String
})
// modelValue
const modelValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

// 초기화
// function clear() {
//   modelValue.value = '0'
// }

// 취소
function cancel() {
  // 길이가 1이라면
  if (modelValue.value.length === 1) {
    // 값이 0이 아니라면
    if (modelValue.value !== '0') {
      // 0으로 초기화
      modelValue.value = '0'
    }
  } else if (modelValue.value.length > 1) {
    // 길이가 1 이상이라면
    // 소수점 첫번째를 지운다면 소수점까지 지움
    if ('.' === modelValue.value.charAt(modelValue.value.length - 2)) {
      modelValue.value = modelValue.value.substring(0, modelValue.value.length - 2)
    } else {
      // 그외 마지막 숫자만 지움
      modelValue.value = modelValue.value.substring(0, modelValue.value.length - 1)
    }
  }
}

// 숫자 입력
function add(numString) {
  // 첫 입력 방지 (0과 .입력)
  if (modelValue.value === '0' && numString !== '.') {
    modelValue.value = numString
    return
  }
  // 소수점이 이미 있다면
  if (modelValue.value.includes('.')) {
    // 소수점 입력 취소
    if (numString === '.') {
      return
    }
    // 일의 자리 - 소수점 한자리 수까지 제한
    if (modelValue.value.indexOf('.') === 1) {
      if (modelValue.value.length > 2) {
        modelValue.value = modelValue.value.slice(0, -1) + numString
        return
      }
    } else if (modelValue.value.indexOf('.') === 2) {
      // 십의 자리 - 소수점 한자리 수까지 제한
      if (modelValue.value.length > 3) {
        modelValue.value = modelValue.value.slice(0, -1) + numString
        return
      }
    } else if (modelValue.value.indexOf('.') === 3) {
      // 백의 자리 - 소수점 한자리 수까지 제한
      if (modelValue.value.length > 4) {
        modelValue.value = modelValue.value.slice(0, -1) + numString
        return
      }
    }
  } else {
    // 소수점이 없다면 세자리 제한
    if (modelValue.value.length === 3 && numString !== '.') {
      return
    }
  }
  // 입력이 . 이라면
  if (numString === '.') {
    modelValue.value += '.0'
  } else {
    // 그 외 - 정상입력
    modelValue.value += numString
  }
}
</script>
<style lang="css" scoped>
/* 키패드 */
.keypad-wrap {
  width: 100%;
}
.keypad-wrap .keypad-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.keypad-wrap .keypad-row .keypad-num {
  color: #343434;
  text-align: center;
  font-size: 30px;
  font-weight: 400;
  background-color: #ffffff;
  width: 100%;
  height: 50px;
  border-radius: 1rem;
}
.keypad-wrap .keypad-row .keypad-else {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #343434;
  text-align: center;
  font-size: 30px;
  font-weight: 400;
  background-color: #ffffff;
  width: 100%;
  height: 50px;
  border-radius: 1rem;
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
