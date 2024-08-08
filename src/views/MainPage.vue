<template>
  <div class="main">
    <div class="now-date mb16">
      <button>
        <img class="now-date-icon mr8" src="../assets/img/svg/icon_calendar.svg" height="25" />
      </button>
      <div class="now-year mr8">
        <p>{{ displayDate.getFullYear() }}년</p>
      </div>
      <div class="now-month">
        <p>{{ displayDate.getMonth() + 1 + '월' }}</p>
      </div>
    </div>

    <div class="now-week">
      <button @click="beforeWeek">
        <img class="now-week-icon" src="../assets/img/svg/icon_before.svg" height="25" />
      </button>
      <template v-for="(item, index) in displayDays" :key="index">
        <div class="now-week-one">
          <div
            class="now-week-day"
            :class="
              today.getDate() === displayDate.getDate() && today.getDay() === index ? 'today' : ''
            "
          >
            {{ dayArr[index] }}
          </div>
          <button
            class="now-week-date"
            :class="displayDate.getDate() === item.date ? 'today' : ''"
            @click="selectDate(item)"
          >
            {{ item.date }}
          </button>
        </div>
      </template>
      <button @click="nextWeek">
        <img class="now-week-icon" src="../assets/img/svg/icon_after.svg" height="25" />
      </button>
    </div>

    <div class="line"></div>

    <RouterView></RouterView>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const dayArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const today = new Date()

/**
 * 표시할 한 주의 날짜 계산
 * - 처음 기준은 '오늘'
 * - 날짜를 이동하면 해당 날짜 기준으로 세팅이 된다.
 */
const displayDate = ref(new Date())
const displayDays = ref([])

// 화면에 보여줄 한 주
function setDisplayWeek() {
  const settingDate = new Date(
    displayDate.value.getFullYear(),
    displayDate.value.getMonth(),
    displayDate.value.getDate() - displayDate.value.getDay()
  )
  displayDays.value = []
  displayDays.value.push({
    year: settingDate.getFullYear(),
    month: settingDate.getMonth(),
    date: settingDate.getDate()
  })
  for (let i = 1; i < 7; i++) {
    settingDate.setDate(settingDate.getDate() + 1)
    displayDays.value.push({
      year: settingDate.getFullYear(),
      month: settingDate.getMonth(),
      date: settingDate.getDate()
    })
  }
}

// 지난 주
function beforeWeek() {
  displayDate.value.setDate(displayDate.value.getDate() - 7)
  displayDays.value = []
  setDisplayWeek()
}

// 다음 주
function nextWeek() {
  displayDate.value.setDate(displayDate.value.getDate() + 7)
  displayDays.value = []
  setDisplayWeek()
}

// 날짜 선택
function selectDate(item) {
  displayDate.value.setFullYear(item.year)
  displayDate.value.setMonth(item.month)
  displayDate.value.setDate(item.date)
}

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
  margin-bottom: 0.4rem;
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
.now-week-date.today {
  font-weight: 600;
}
.now-week-date.did {
  color: #f2efe7;
  background-color: #343434;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
}

.line {
  width: 100%;
  border-bottom: 1px solid #bababa;
  margin-top: 4rem;
  margin-bottom: 4rem;
}
</style>
