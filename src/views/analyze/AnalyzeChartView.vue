<template>
  <div class="chart-space">
    <V-Line :data="data" :options="options" />
  </div>
  <button @click="test">클릭</button>
</template>

<script setup>
import { ref } from 'vue'

// 옵션
const options = {
  responsive: true,
  maintainAspectRatio: false
}

// 데이터
const data = ref({
  labels: ['240101', '240101', '240101', '240101', '240101', '240101', '240101'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [60, 61, 63, 65, 68, 64, 61]
    }
  ]
})
</script>

<style scoped>
.chart-space {
  background: #ffffff;
  border-radius: 5px;
  width: 100%;
  height: 300px;
}
</style>
