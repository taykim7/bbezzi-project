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

    <!-- TODO 로딩 이미지 구현 -->
    <template v-if="loading"></template>

    <div class="now-week">
      <button @click="beforeWeek">
        <img class="now-week-icon" src="../assets/img/svg/icon_before.svg" height="25" />
      </button>
      <template v-for="(day, index) in displayWeek" :key="index">
        <div class="now-week-one">
          <div
            class="now-week-day"
            :class="0 === fromThisWeek && today.getDay() === index ? 'today' : ''"
          >
            {{ dayArr[index] }}
          </div>
          <button
            class="now-week-date"
            :class="hasDone(index) ? 'did' : ''"
            @click="selectDate(day)"
          >
            {{ day.date }}
          </button>
          <div
            class="now-week-selected"
            :class="displayDate.getDate() === day.date ? 'selected' : ''"
          ></div>
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
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import { usePostStore } from '@/stores/post'

const { getMyInfo } = useUserStore()
const { uid } = storeToRefs(useUserStore())
const { fetchPosts } = usePostStore()
const { posts } = storeToRefs(usePostStore())

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
const loading = ref(false)
const todayData = ref({})

onMounted(async () => {
  // 초기화
  await setDisplayWeek()
  await getMyInfo().then(() => {
    if (uid.value) {
      fetchPosts(uid.value, displayWeek.value[0].fullDate, displayWeek.value[6].fullDate)
    }
  })
})

// 화면에 보여줄 한 주 계산
function setDisplayWeek() {
  const index = displayDate.value.getDay()
  const settingDate = new Date(
    displayDate.value.getFullYear(),
    displayDate.value.getMonth(),
    displayDate.value.getDate() - index
  )
  displayWeek.value[0] = {
    year: settingDate.getFullYear(),
    month: settingDate.getMonth(),
    date: settingDate.getDate(),
    fullDate: `${settingDate.getFullYear()}${
      settingDate.getMonth() + 1 < 10
        ? '0' + (settingDate.getMonth() + 1)
        : settingDate.getMonth() + 1
    }${settingDate.getDate() < 10 ? '0' + settingDate.getDate() : settingDate.getDate()}`
  }
  for (let i = 1; i < 7; i++) {
    settingDate.setDate(settingDate.getDate() + 1)
    displayWeek.value[i] = {
      year: settingDate.getFullYear(),
      month: settingDate.getMonth(),
      date: settingDate.getDate(),
      fullDate: `${settingDate.getFullYear()}${
        settingDate.getMonth() + 1 < 10
          ? '0' + (settingDate.getMonth() + 1)
          : settingDate.getMonth() + 1
      }${settingDate.getDate() < 10 ? '0' + settingDate.getDate() : settingDate.getDate()}`
    }
  }

  todayData.value =
    posts.value.filter((item) => {
      return item.standardDate === displayWeek.value[index].fullDate
    })[0] || null

  setDisplayDateStr()
}

// 지난 주
async function beforeWeek() {
  try {
    loading.value = true
    displayDate.value.setDate(displayDate.value.getDate() - 7)
    await setDisplayWeek()
    fromThisWeek.value -= 1
    if (uid.value) {
      await fetchPosts(uid.value, displayWeek.value[0].fullDate, displayWeek.value[6].fullDate)
    }
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

// 다음 주
async function nextWeek() {
  try {
    loading.value = true
    displayDate.value.setDate(displayDate.value.getDate() + 7)
    await setDisplayWeek()
    fromThisWeek.value += 1
    if (uid.value) {
      await fetchPosts(uid.value, displayWeek.value[0].fullDate, displayWeek.value[6].fullDate)
    }
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

// 오늘로 돌아오기
async function onToday() {
  try {
    loading.value = true
    displayDate.value.setFullYear(today.value.getFullYear())
    displayDate.value.setMonth(today.value.getMonth())
    displayDate.value.setDate(today.value.getDate())
    setDisplayWeek()
    fromThisWeek.value = 0
    if (uid.value) {
      await fetchPosts(uid.value, displayWeek.value[0].fullDate, displayWeek.value[6].fullDate)
    }
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
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
    title: `${displayDate.value.getFullYear()}-${displayDate.value.getMonth() + 1}-${displayDate.value.getDate()} ${dayArrKor[displayDate.value.getDay()]}`,
    fullDate: `${displayDate.value.getFullYear()}${
      displayDate.value.getMonth() + 1 < 10
        ? '0' + (displayDate.value.getMonth() + 1)
        : displayDate.value.getMonth() + 1
    }${displayDate.value.getDate() < 10 ? '0' + displayDate.value.getDate() : displayDate.value.getDate()}`,
    todayData: todayData.value
  }
}

// 저장한 데이터가 있는지 확인
function hasDone(index) {
  let result = false
  posts.value.forEach((item) => {
    if (item.standardDate === displayWeek.value[index].fullDate) {
      result = true
    }
  })
  return result
}
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
/* 오늘 */
.today {
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
.now-week-selected {
  width: 40px;
  height: 1px;
  text-align: center;
}
/* TODO 표현 변경 */
/* 선택한 날 */
.selected {
  background-color: #343434;
}
/* 기록한 날 */
.did {
  font-weight: 600;
  color: #f2efe7;
  background-color: #343434;
}

.line {
  width: 100%;
  border-bottom: 1px solid #bababa;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
