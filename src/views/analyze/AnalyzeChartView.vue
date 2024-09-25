<template>
  <div class="chart-space">
    <V-Line :data="data" :options="options" style="background-color: #f2ebe7" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  posts: Object
})

// TODO 커스텀툴팁
// 옵션
const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: false
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
}

// 데이터
const data = ref({
  labels: [],
  datasets: [
    {
      label: '체중',
      backgroundColor: '#343434',
      borderJoinStyle: 'round',
      data: []
    }
  ]
})

// 데이터 수에 따라 크기 변경
const postsCount = props.posts.length
if (postsCount <= 7) {
  data.value.datasets[0].pointRadius = 7
  data.value.datasets[0].borderWidth = 7
} else if (7 < postsCount && postsCount <= 20) {
  data.value.datasets[0].pointRadius = 5
  data.value.datasets[0].borderWidth = 5
} else if (20 < postsCount && postsCount <= 180) {
  data.value.datasets[0].pointRadius = 3
  data.value.datasets[0].borderWidth = 3
} else {
  data.value.datasets[0].pointRadius = 1
  data.value.datasets[0].borderWidth = 1
}

// 데이터 삽입
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
