<template>
  <div v-if="showBnb" class="bnb">
    <div class="bnb-btns">
      <div class="bnb-home">
        <img class="bnb-icon" src="../../assets/img/svg/icon_home_solid.svg" height="25" />
        <button class="bnb-btn" @click="moveMainPage">홈</button>
      </div>
      <div class="bnb-analyze">
        <img class="bnb-icon" src="../../assets/img/svg/icon_chart_solid.svg" height="25" />
        <button class="bnb-btn" @click="moveAnalyPage">분석</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()

const showBnb = computed(() => {
  return route.meta.bnb
})

// 홈
const moveMainPage = () => {
  router.push({
    path: '/main/gram'
  })
}

// 분석
const moveAnalyPage = () => {
  router.push({
    path: '/main/analyze'
  })
}
</script>

<style scoped>
.bnb {
  background: #343434;
  width: 100%;
  height: 140px;
  position: fixed;
  bottom: -5%;
  left: 0%;
}
.bnb-btns {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}
.bnb-btns .bnb-home {
  width: 100%;
}
.bnb-btns .bnb-analyze {
  width: 100%;
}
.bnb-btns .bnb-icon {
}
.bnb-btns .bnb-btn {
  color: #f2efe7;
  font-size: 15px;
  font-weight: 400;
  width: 100%;
}
</style>
