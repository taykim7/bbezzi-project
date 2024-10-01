<template>
  <div class="chart-space">
    <V-Line :data="data" :options="options" style="background-color: #f2ebe7" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  posts: Object,
  displayDate: String
})

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

const postsCount = ref(0)
watch(props, () => {
  initPosts()
})

const initPosts = () => {
  data.value = {
    labels: [],
    datasets: [
      {
        label: '체중',
        backgroundColor: '#343434',
        borderJoinStyle: 'round',
        data: []
      }
    ]
  }

  // 데이터 수에 따라 크기 변경
  postsCount.value = props.posts.length
  if (postsCount.value <= 7) {
    data.value.datasets[0].pointRadius = 7
    data.value.datasets[0].borderWidth = 7
  } else if (7 < postsCount.value && postsCount.value <= 20) {
    data.value.datasets[0].pointRadius = 5
    data.value.datasets[0].borderWidth = 5
  } else if (20 < postsCount.value && postsCount.value <= 180) {
    data.value.datasets[0].pointRadius = 3
    data.value.datasets[0].borderWidth = 3
  } else {
    data.value.datasets[0].pointRadius = 1
    data.value.datasets[0].borderWidth = 1
  }

  // 데이터 삽입
  const labels = []
  const datas = []
  for (let i = postsCount.value - 1; i >= 0; i--) {
    if (Number(props.posts[i].standardDate) <= Number(props.displayDate)) {
      labels.push(props.posts[i].standardDate)
      datas.push(props.posts[i].gram)
    }
  }
  data.value.labels = [...labels]
  data.value.datasets[0].data = [...datas]
}

// 첫 조회
initPosts()

// TODO 커스텀툴팁
</script>

<style scoped>
.chart-space {
  background: #ffffff;
  border-radius: 5px;
  width: 100%;
  height: 300px;
}
</style>
