<template>
  <div class="btn-wrap">
    <div class="btn-items">
      <div class="btn-item">
        <!-- 메인 버튼 -->
        <button v-if="singleMain" class="btn-main" @click="$emit('btnMain')">
          {{ titleBtnMain || 'button' }}
        </button>
        <div v-else class="btn-two">
          <button class="btn-main-left" @click="$emit('btnLeft')">
            {{ titleBtnLeft || 'button2' }}
          </button>
          <button class="btn-main-right" @click="$emit('btnRight')">
            {{ titleBtnRight || 'button3' }}
          </button>
        </div>
        <template v-if="useSub">
          <!-- 서브 버튼 -->
          <div v-if="useSub && singleSub" class="btn-one">
            <button class="btn-center" @click="$emit('subMain')">
              {{ titleSubMain || 'button4' }}
            </button>
          </div>
          <div v-else class="btn-two">
            <button class="btn-left" @click="$emit('subLeft')">
              {{ titleSubLeft || 'button5' }}
            </button>
            <button class="btn-right" @click="$emit('subRight')">
              {{ titleSubRight || 'button6' }}
            </button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup>
defineEmits([
  // 메인 버튼 (중간, 좌측, 우측)
  'btnMain',
  'btnLeft',
  'btnRight',
  // 서브 버튼 (중간, 좌측, 우측)
  'subMain',
  'subLeft',
  'subRight'
])
defineProps({
  singleMain: Boolean,
  useSub: Boolean,
  singleSub: Boolean,

  titleBtnMain: String,
  titleBtnLeft: String,
  titleBtnRight: String,
  titleSubMain: String,
  titleSubLeft: String,
  titleSubRight: String
})
</script>
