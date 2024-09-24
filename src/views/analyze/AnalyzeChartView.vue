<template>
  <div class="chart-space">
    <V-Line :data="data" :options="options" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  posts: Object
})

// 옵션
const options = {
  responsive: true,
  maintainAspectRatio: false
}

// 데이터
const data = ref({
  labels: [],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: []
    }
  ]
})

for (const element of props.posts) {
  data.value.labels.push(element.standardDate)
  data.value.datasets[0].data.push(element.gram)
}
</script>

<style scoped>
.chart-space {
  background: #ffffff;
  border-radius: 5px;
  width: 100%;
  height: 300px;
}
</style>
