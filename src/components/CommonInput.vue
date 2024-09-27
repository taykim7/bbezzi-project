<template>
  <div class="input-title mb4">{{ title || 'title' }}</div>
  <div v-if="type !== 'textarea'" class="input-contents">
    <input
      class="input-item mb16"
      v-model="modelValue"
      :type="type || 'text'"
      :placeholder="placeholder || 'placeholder'"
    />
    <!-- 중복확인 -->
    <button v-if="doubleCheck" class="input-btn ml8">중복확인</button>
  </div>
  <div v-else class="input-contents mb16">
    <!-- textarea -->
    <textarea
      class="input-textarea"
      v-model="modelValue"
      :placeholder="placeholder || 'placeholder'"
      @input="autosize"
    ></textarea>
  </div>
</template>
<script setup>
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: String,
  type: String,
  placeholder: String,
  title: String,
  doubleCheck: Boolean
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

// textarea height
function autosize() {
  const el = document.querySelector('textarea')
  el.style.height = 0
  el.style.height = Number(el.scrollHeight + 18) + 'px'
}
</script>
<style>
.input-title {
  color: #343434;
  text-align: left;
  font-size: 20px;
  font-weight: 600;
}
.input-contents {
  display: flex;
  justify-content: space-between;
}
.input-wrap .input-contents .input-btn {
  color: #ff5353;
  font-size: 15px;
  font-weight: 300;
  border-radius: 30px;
  border-style: solid;
  border-color: #ff5353;
  border-width: 1px;
  width: 130px;
  height: 35px;
}
.input-contents .input-item {
  color: #343434;
  text-align: left;
  font-size: 15px;
  font-weight: 600;

  border-width: 0 0 1px;
  background: transparent;
  width: 100%;
  padding: 5px 0 5px 0;
}
.input-contents .input-item::placeholder {
  color: #bababa;
}
/* textarea */
.input-contents .input-textarea {
  color: #343434;
  text-align: left;
  font-size: 15px;
  font-weight: 600;

  border-width: 0 0 1px;
  background: transparent;
  width: 100%;
  padding: 5px 0 5px 0;

  resize: none;
}
.input-contents .input-textarea::placeholder {
  color: #bababa;
}
.input-contents .input-textarea::-webkit-scrollbar {
  display: none;
}
</style>
