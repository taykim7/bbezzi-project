<template>
  <div class="input-title mb4">{{ title || 'title' }}</div>
  <div v-if="type !== 'textarea'" class="input-contents">
    <input
      class="input-item mb16"
      :type="type || 'text'"
      :placeholder="placeholder || 'placeholder'"
      :value="modelValue || ''"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <!-- 중복확인 -->
    <button v-if="doubleCheck" class="input-btn ml8">중복확인</button>
  </div>
  <div v-else class="input-contents mb16">
    <!-- textarea -->
    <textarea
      class="input-textarea"
      :placeholder="placeholder || 'placeholder'"
      :value="modelValue || ''"
      rows="1"
    ></textarea>
  </div>
</template>
<script setup>
defineEmits(['update:modelValue'])
defineProps({
  modelValue: String,
  type: String,
  placeholder: String,
  title: String,
  doubleCheck: Boolean
})
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
}
.input-contents .input-textarea::placeholder {
  color: #bababa;
}
</style>
