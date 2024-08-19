<template>
  <div class="chart-wrap mb60">
    <div class="chart-title mb8">기간 설정</div>
    <div class="chart-btns mb40">
      <button
        class="chart-btn"
        :class="range === '1y' ? 'selected' : ''"
        @click="setStartDate('1y')"
        :disabled="range === '1y'"
      >
        1년
      </button>
      <button
        class="chart-btn"
        :class="range === '6m' ? 'selected' : ''"
        @click="setStartDate('6m')"
        :disabled="range === '6m'"
      >
        6개월
      </button>
      <button
        class="chart-btn"
        :class="range === '1m' ? 'selected' : ''"
        @click="setStartDate('1m')"
        :disabled="range === '1m'"
      >
        1개월
      </button>
      <button
        class="chart-btn"
        :class="range === '1w' ? 'selected' : ''"
        @click="setStartDate('1w')"
        :disabled="range === '1w'"
      >
        1주일
      </button>
    </div>
    <div class="chart-date mb40">
      <p>{{ startDateTitle }}</p>
      <p class="ml8 mr8">~</p>
      <p>{{ displayDateProps.title }}</p>
    </div>
    <AnalyzeChartView />
  </div>

  <div class="chart-wrap mb60">
    <div class="chart-title mb8">{{ rangeTitle }}의 업적</div>
    <div class="did-list">
      <div class="did-title mb4">320일의 체중을 기록하였습니다!</div>
      <div class="did-title">2.3 kg 감량했습니다!</div>
    </div>
  </div>

  <div class="list-wrap mb100">
    <div class="list-title mb4">{{ rangeTitle }}의 리스트</div>
    <div class="list-count mb8">총 {{ testData.length }} 건</div>
    <div class="list-items">
      <template v-for="(data, index) in testData" :key="index">
        <template v-if="edit === index">
          <!-- 아이템1 -->
          <div class="list-item-edit">
            <p class="list-date mr8">{{ data.date }}</p>
            <p class="list-gram mr8">{{ data.gram }}</p>
            <textarea class="list-memo mr8" :value="data.memo"></textarea>
            <div class="list-btn-wrap">
              <button class="list-save mr8">
                <img class="now-week-icon" src="../../assets/img/svg/icon_back.svg" height="15" />
              </button>
              <button class="list-save">
                <img
                  class="now-week-icon"
                  src="../../assets/img/svg/icon_save_solid.svg"
                  height="20"
                />
              </button>
            </div>
          </div>
        </template>
        <template v-else>
          <!-- 아이템1 -->
          <div class="list-item">
            <p class="list-date mr8">{{ data.date }}</p>
            <p class="list-gram mr8">{{ data.gram }}</p>
            <textarea class="list-memo mr8" :value="data.memo" readonly></textarea>
            <div class="list-btn-wrap">
              <button class="list-edit mr8" @click="tryEdit(index)">
                <img
                  class="now-week-icon"
                  src="../../assets/img/svg/icon_edit_solid.svg"
                  height="20"
                />
              </button>
              <button class="list-delete">
                <img
                  class="now-week-icon"
                  src="../../assets/img/svg/icon_delete_solid.svg"
                  height="20"
                />
              </button>
            </div>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue'
import AnalyzeChartView from './AnalyzeChartView.vue'

const props = defineProps({
  displayDateProps: Object
})
const dayArrKor = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
const startDate = ref({})
const range = ref('')
const startDateTitle = ref('')
const rangeTitle = ref('')

const edit = ref(null)

// 테스트 데이터
const testData = ref([
  {
    date: '2024.07.01',
    gram: 68.1,
    memo: '오늘은 이것저것 쳐먹었따.'
  },
  {
    date: '2024.07.02',
    gram: 58.1,
    memo: '어쩌구 저쩌구 메모'
  },
  {
    date: '2024.07.03',
    gram: 69.1,
    memo: '진짜 다이어트 해야함'
  },
  {
    date: '2024.07.04',
    gram: 67.1,
    memo: ''
  },
  {
    date: '2024.07.05',
    gram: 68.0,
    memo: ''
  },
  {
    date: '2024.07.06',
    gram: 68.2,
    memo: '오늘은 이것저것 쳐먹었따.오늘은 이것저것 쳐먹었따.오늘은 이것저것 쳐먹었따.오늘은 이것저것 쳐먹었따.오늘은 이것저것 쳐먹었따.'
  },
  {
    date: '2024.07.07',
    gram: 68.4,
    memo: '어쩌구 저쩌구'
  },
  {
    date: '2024.07.08',
    gram: 68.5,
    memo: '오늘은 이것저것 쳐먹었따.'
  }
])

// mounted시 초기화
onMounted(() => init())

// 날짜 선택시 세팅
watch(props, (value) => {
  console.log(value.displayDateProps.title)
  setStartDate(range.value)
})

// 범위 시작 날짜 세팅
function setStartDate(start) {
  switch (start) {
    case '1y':
      startDate.value = new Date(
        props.displayDateProps.year - 1,
        props.displayDateProps.month,
        props.displayDateProps.date
      )
      range.value = '1y'
      rangeTitle.value = '1년'
      break
    case '6m':
      startDate.value = new Date(
        props.displayDateProps.year,
        props.displayDateProps.month - 6,
        props.displayDateProps.date
      )
      range.value = '6m'
      rangeTitle.value = '6개월'
      break
    case '1m':
      startDate.value = new Date(
        props.displayDateProps.year,
        props.displayDateProps.month - 1,
        props.displayDateProps.date
      )
      range.value = '1m'
      rangeTitle.value = '1개월'
      break
    case '1w':
      startDate.value = new Date(
        props.displayDateProps.year,
        props.displayDateProps.month,
        props.displayDateProps.date - 7
      )
      range.value = '1w'
      rangeTitle.value = '1주'
      break
  }
  startDateTitle.value = `${startDate.value.getFullYear()}-${startDate.value.getMonth() + 1}-${startDate.value.getDate()} ${dayArrKor[startDate.value.getDay()]}`
}

// 초기화 1주일로 세팅
function init() {
  range.value = '1w'
  setStartDate(range.value)
  // TODO 데이터 조회
}

// 수정 중
function tryEdit(index) {
  edit.value = index
}
</script>

<style scoped>
.chart-wrap {
  width: 100%;
}
.chart-wrap .chart-title {
  color: #343434;
  text-align: left;
  font-size: 20px;
  font-weight: 600;
}

.chart-btns {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
}
.chart-btn {
  color: #343434;
  text-align: center;
  font-size: 15px;
  font-weight: 300;
  background: #fff9eb;
  border-radius: 5px;
  width: 100%;
  height: 3rem;
}
.chart-btn.selected {
  color: #f2efe7;
  font-weight: 600;
  background: #343434;
}
.chart-date {
  display: flex;
  justify-content: center;
}
.chart-date p {
  color: #343434;
  font-size: 15px;
  font-weight: 400;
  font-weight: 400;
}
.did-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.did-title {
  color: #f2efe7;
  text-align: center;
  font-size: 20px;
  font-weight: 700;

  background: #343434;
  border-radius: 5px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
}

.sub-title {
  color: #343434;
  text-align: left;
  font-size: 15px;
  font-weight: 400;
}

.list-wrap {
  width: 100%;
}
.list-wrap .list-title {
  color: #343434;
  text-align: left;
  font-size: 20px;
  font-weight: 600;
}
.list-count {
  color: #343434;
  text-align: left;
  font-size: 15px;
  font-weight: 400;
}
.list-items {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.list-item {
  background-color: #343434;
  border-radius: 5px;
  height: 39px;
  align-items: top;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;
}
.list-item .list-date {
  color: #706f6f;
  text-align: left;
  font-size: 15px;
  font-weight: 400;
  align-items: center;
  justify-content: center;
}
.list-gram {
  color: #f2efe7;
  text-align: left;
  font-size: 20px;
  font-weight: 800;
  width: 50px;
}
.list-item .list-memo {
  background: transparent;
  width: 50%;
  color: #706f6f;
  text-align: left;
  font-size: 15px;
  font-weight: 300;
  border: 0;
}
/* 수정 */
.list-item-edit {
  background-color: #ee5600;
  border-radius: 5px;
  height: 129px;
  display: flex;
  align-items: top;
  padding: 10px;
  justify-content: space-between;
  margin-bottom: 0.4rem;
}
.list-item-edit .list-date {
  color: #343434;
  text-align: left;
  font-size: 15px;
  font-weight: 400;
  align-items: center;
  justify-content: center;
}
.list-item-edit .list-memo {
  background: transparent;
  width: 50%;
  height: 100%;
  color: #343434;
  text-align: left;
  font-size: 15px;
  font-weight: 300;
  border: 0;
}
.list-btn-wrap {
  display: flex;
  width: 50px;
}
.list-edit {
  /* background: #706f6f; */
  border-radius: 10px;
  width: 20px;
  height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.list-delete {
  /* background: #706f6f; */
  border-radius: 10px;
  width: 20px;
  height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.list-save {
  /* background: #ffffff; */
  border-radius: 10px;
  width: 20px;
  height: 20px;
  text-align: right;
  align-items: center;
  justify-content: center;
  display: flex;
}
</style>
