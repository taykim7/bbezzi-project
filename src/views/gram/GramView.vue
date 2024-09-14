<template>
  <div class="gram-wrap">
    <div class="gram-title mb4">
      <div class="gram-text">체중</div>
      <div class="gram-date">{{ displayDateProps.title }}</div>
    </div>
    <div class="gram-input mb32">
      <template v-if="limitNumber">
        <div class="gram-limit">√</div>
      </template>
      <div class="gram-gram" :class="limitNumber ? 'limit' : ''">
        <p>
          {{ gram }}
        </p>
      </div>
      <div class="gram-unit">kg</div>
    </div>
  </div>
  <!-- 키패드 -->
  <template v-if="edit">
    <C-Keypad v-model="gram"></C-Keypad>
  </template>

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
    @btn-left="tryEdit"
    @btn-right="tryDelete"
  />
</template>

<script setup>
import { ref, watch, computed } from 'vue'

const emit = defineEmits(['postData', 'deleteData'])
const props = defineProps({
  displayDateProps: Object
})

// 날짜 선택시 세팅
watch(props, (value) => {
  memo.value = value.displayDateProps.selectedData?.memo || ''
  gram.value = value.displayDateProps.selectedData?.gram || '0'
  edit.value = false
})

const memo = ref('')
const gram = ref('0')
const edit = ref(false)
const hasData = computed(() => {
  return props.displayDateProps.selectedData === null ? false : true
})
// 체중 입력 범위 한계
const limitNumber = computed(() => {
  const decimalPoint = gram.value.indexOf('.')
  const modelValueLength = gram.value.length
  switch (decimalPoint) {
    case 1:
      return modelValueLength === 3 ? true : false
    case 2:
      return modelValueLength === 4 ? true : false
    case 3:
      return modelValueLength === 5 ? true : false
    default:
      return false
  }
})

// 등록
function registration() {
  // TODO 데이터 검사
  if (gram.value.indexOf('.') < 0) {
    gram.value += '.0'
  } else if (gram.value.indexOf('.') === gram.value.length - 1) {
    gram.value += '0'
  }
  const postData = {
    createdDate: props.displayDateProps.fullDate,
    standardDate: props.displayDateProps.fullDate,
    memo: memo.value,
    gram: gram.value
  }
  emit('postData', postData)
  edit.value = false
}

// 수정
function tryEdit() {
  edit.value = true
}

// 삭제
function tryDelete() {
  if (hasData.value) {
    emit('deleteData', props.displayDateProps.fullDate)
  }
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
.gram-wrap .gram-input .gram-limit {
  position: absolute;
  transform: translate(50%, -50%);
  top: 50%;
  left: 1rem;
  color: #ffffff;
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
.gram-wrap .gram-input .gram-gram.limit {
  color: #ffffff;
}
</style>
