<template>
  <div class="main">
    <div class="now-date mb16">
      <button>
        <!-- TODO 캘린더 팝업 추가 -->
        <img
          class="now-date-icon mr8"
          src="../assets/img/svg/icon_calender_color.svg"
          height="25"
        />
      </button>
      <div class="now-year mr8">
        <p>{{ displayDate.getFullYear() }}년</p>
      </div>
      <div class="now-month">
        <p>{{ displayDate.getMonth() + 1 + '월' }}</p>
      </div>
      <button v-if="today.getDate() !== displayDate.getDate()" @click="onToday">
        <!-- FIXME 아이콘 수정 -->
        <img class="now-date-icon ml8" src="../assets/img/svg/icon_clear.svg" height="25" />
      </button>
    </div>

    <div class="now-week">
      <button @click="beforeWeek">
        <img class="now-week-icon" src="../assets/img/svg/icon_before.svg" height="25" />
      </button>
      <template v-for="(day, index) in displayWeek" :key="index">
        <div class="now-week-one" :class="displayDate.getDate() === day.date ? 'selected' : ''">
          <div
            class="now-week-day"
            :class="0 === fromThisWeek && today.getDay() === index ? 'today' : ''"
          >
            {{ dayArr[index] }}
          </div>
          <button class="now-week-date" @click="selectDate(day)">
            {{ day.date }}
          </button>
        </div>
      </template>
      <button @click="nextWeek">
        <img class="now-week-icon" src="../assets/img/svg/icon_after.svg" height="25" />
      </button>
    </div>

    <div class="line"></div>

    <RouterView :displayDateProps="displayDateProps"></RouterView>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const dayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const dayArrKor = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
const today = ref(new Date())

// 기준이 될 날짜
// 기준이 될 날짜로 구성된 한 주
// 이번 주로부터의 간격
// 서브타이틀용 기준 날짜
const displayDate = ref(new Date())
const displayWeek = ref([])
const fromThisWeek = ref(0)
const displayDateProps = ref({})

// 화면에 보여줄 한 주 계산
function setDisplayWeek() {
  setDisplayDateStr()
  const settingDate = new Date(
    displayDate.value.getFullYear(),
    displayDate.value.getMonth(),
    displayDate.value.getDate() - displayDate.value.getDay()
  )
  displayWeek.value = []
  displayWeek.value.push({
    year: settingDate.getFullYear(),
    month: settingDate.getMonth(),
    date: settingDate.getDate()
  })
  for (let i = 1; i < 7; i++) {
    settingDate.setDate(settingDate.getDate() + 1)
    displayWeek.value.push({
      year: settingDate.getFullYear(),
      month: settingDate.getMonth(),
      date: settingDate.getDate()
    })
  }
}

// 지난 주
function beforeWeek() {
  displayDate.value.setDate(displayDate.value.getDate() - 7)
  setDisplayWeek()
  fromThisWeek.value -= 1
}

// 다음 주
function nextWeek() {
  displayDate.value.setDate(displayDate.value.getDate() + 7)
  setDisplayWeek()
  fromThisWeek.value += 1
}

// 오늘로 돌아오기
function onToday() {
  displayDate.value.setFullYear(today.value.getFullYear())
  displayDate.value.setMonth(today.value.getMonth())
  displayDate.value.setDate(today.value.getDate())
  setDisplayWeek()
  fromThisWeek.value = 0
}

// 날짜 선택
function selectDate(item) {
  displayDate.value.setFullYear(item.year)
  displayDate.value.setMonth(item.month)
  displayDate.value.setDate(item.date)
  setDisplayWeek()
}

// 서브타이틀용 기준 날짜
function setDisplayDateStr() {
  displayDateProps.value = {
    year: displayDate.value.getFullYear(),
    month: displayDate.value.getMonth(),
    date: displayDate.value.getDate(),
    day: displayDate.value.getDay(),
    title: `${displayDate.value.getFullYear()}-${displayDate.value.getMonth() + 1}-${displayDate.value.getDate()} ${dayArrKor[displayDate.value.getDay()]}`
  }
}

// 초기화
setDisplayWeek()
</script>

<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.now-date {
  display: flex;
  align-items: center;
  flex-direction: row;

  color: #343434;
}
.now-date-icon {
  width: auto;
}
.now-year {
  font-size: 20px;
  font-weight: 400;
  text-align: center;
}
.now-month {
  font-size: 20px;
  font-weight: 800;
  text-align: center;
}
.now-week {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.now-week-one {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.now-week-day {
  color: #343434;
  width: 40px;
  border-radius: 20px;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  margin: 0.4rem;
}
.now-week-day.today {
  color: #f2efe7;
  background-color: #343434;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 600;
}

.now-week-date {
  color: #343434;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
}
.selected {
  background-color: #fff9eb;
  border-radius: 5px;
}
.did {
  font-weight: 600;
  color: #f2efe7;
  background-color: #343434;
}

.line {
  width: 100%;
  border-bottom: 1px solid #bababa;
  margin-top: 4rem;
  margin-bottom: 4rem;
}
</style>
