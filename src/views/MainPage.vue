<template>
  <div class="main-wrap">
    <div class="now-date-wrap mb16">
      <button>
        <!-- TODO 캘린더 팝업 추가 -->
        <img class="icon-img mr8" src="../assets/img/svg/icon_calender_color.svg" height="25" />
      </button>
      <div class="now-date mr8">
        <p>
          {{ displayDate.getFullYear() }}년 <b>{{ displayDate.getMonth() + 1 + '월' }}</b>
        </p>
      </div>
      <template v-if="today.getDate() !== displayDate.getDate()">
        <button @click="onToday">
          <!-- FIXME 아이콘 수정 -->
          <img class="icon-img ml8" src="../assets/img/svg/icon_clear.svg" height="25" />
        </button>
      </template>
    </div>

    <!-- TODO 로딩 이미지 구현 -->
    <template v-if="loading"></template>

    <div class="now-week-wrap">
      <button @click="beforeWeek">
        <img class="icon-img" src="../assets/img/svg/icon_before.svg" height="25" />
      </button>
      <template v-for="(day, index) in displayWeek" :key="index">
        <div class="now-week-one">
          <div
            class="now-week-day"
            :class="0 === fromThisWeek && today.getDay() === index ? 'today' : ''"
          >
            {{ dayArr[index] }}
          </div>
          <template v-if="isFutureDate(day)">
            <button class="now-week-date future" disabled>
              {{ day.date }}
            </button>
          </template>
          <template v-else>
            <button
              class="now-week-date"
              :class="hasDone(index) ? 'did' : ''"
              @click="selectDate(day)"
            >
              {{ day.date }}
            </button>
          </template>
          <div
            class="now-week-selected"
            :class="displayDate.getDate() === day.date ? 'selected' : ''"
          ></div>
        </div>
      </template>
      <template v-if="isFutureWeek()">
        <button></button>
      </template>
      <template v-else>
        <button @click="nextWeek">
          <img class="icon-img" src="../assets/img/svg/icon_after.svg" height="25" />
        </button>
      </template>
    </div>

    <div class="line"></div>

    <RouterView
      :displayDateProps="displayDateProps"
      @postData="trySetPost"
      @deleteData="tryDeleteData"
      @range="tryFetchRange"
    ></RouterView>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { usePostStore } from '@/stores/post'
import { useLogin } from '@/composables/login'

const { getMyInfo } = useUserStore()
const { uid } = storeToRefs(useUserStore())
const { fetchPosts, setPost, deletePost } = usePostStore()
const { posts } = storeToRefs(usePostStore())
const { logOut } = useLogin()

const router = useRouter()
const dayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const dayArrKor = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
const today = ref(new Date())

// 기준 날짜
const displayDate = ref(new Date())
// 기준 날짜로 구성된 한 주
const displayWeek = ref([])
// 이번 주로부터의 간격
const fromThisWeek = ref(0)
// 선택된 날짜의 데이터
const selectedData = ref({})
// props
const displayDateProps = ref({})
// 로딩
const loading = ref(false)
// 시작범위
const rangeStartFullDate = ref('')

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
  // 한 주 중 기준 날짜의 순서
  const index = displayDate.value.getDay()
  // 세팅용 날짜 (일요일부터 시작)
  const settingDate = new Date(
    displayDate.value.getFullYear(),
    displayDate.value.getMonth(),
    displayDate.value.getDate() - index
  )
  // 한 주 구성
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
  // 현재 선택된 날짜의 데이터 추출
  selectedData.value =
    posts.value.filter((item) => {
      return item.standardDate === displayWeek.value[index].fullDate
    })[0] || null
  // props 데이터 세팅
  setPropsData()
}

// 지난 주
async function beforeWeek() {
  try {
    loading.value = true
    // 기준 날짜를 7일 전으로 세팅
    displayDate.value.setDate(displayDate.value.getDate() - 7)
    await setDisplayWeek()
    fromThisWeek.value -= 1
    if (uid.value) {
      await fetchPosts(
        uid.value,
        rangeStartFullDate.value === '' ? displayWeek.value[0].fullDate : rangeStartFullDate.value,
        displayWeek.value[6].fullDate
      )
    } else {
      tryLogOut()
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
    // 기준 날짜를 7일 후로 세팅
    displayDate.value.setDate(displayDate.value.getDate() + 7)
    if (0 < displayDate.value - today.value) {
      displayDate.value = new Date(today.value)
    }
    fromThisWeek.value += 1
    await setDisplayWeek()
    if (uid.value) {
      await fetchPosts(
        uid.value,
        rangeStartFullDate.value === '' ? displayWeek.value[0].fullDate : rangeStartFullDate.value,
        displayWeek.value[6].fullDate
      )
    } else {
      tryLogOut()
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
    // 기준 날짜를 오늘로 세팅
    displayDate.value.setFullYear(today.value.getFullYear())
    displayDate.value.setMonth(today.value.getMonth())
    displayDate.value.setDate(today.value.getDate())
    await setDisplayWeek()
    fromThisWeek.value = 0
    if (uid.value) {
      await fetchPosts(
        uid.value,
        rangeStartFullDate.value === '' ? displayWeek.value[0].fullDate : rangeStartFullDate.value,
        displayWeek.value[6].fullDate
      )
    } else {
      tryLogOut()
    }
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

// 날짜 선택
function selectDate(item) {
  // 기준 날짜를 선택한 날짜로 세팅
  displayDate.value.setFullYear(item.year)
  displayDate.value.setMonth(item.month)
  displayDate.value.setDate(item.date)
  // 기준 날짜를 기준으로 한 주 세팅
  setDisplayWeek()
}

// 서브타이틀용 기준 날짜
function setPropsData() {
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
    selectedData: selectedData.value
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

// 미래인지 확인(day)
function isFutureDate(item) {
  const targetDate = item.fullDate
  const todayDate = `${today.value.getFullYear()}${
    today.value.getMonth() + 1 < 10
      ? '0' + (today.value.getMonth() + 1)
      : today.value.getMonth() + 1
  }${today.value.getDate() < 10 ? '0' + today.value.getDate() : today.value.getDate()}`
  return Number(targetDate) > Number(todayDate)
}

// 미래인지 확인(week)
function isFutureWeek() {
  const todayDate = `${today.value.getFullYear()}${
    today.value.getMonth() + 1 < 10
      ? '0' + (today.value.getMonth() + 1)
      : today.value.getMonth() + 1
  }${today.value.getDate() < 10 ? '0' + today.value.getDate() : today.value.getDate()}`
  const targetDate = displayWeek.value.filter((item) => {
    return item.fullDate === todayDate
  })
  return targetDate.length === 1
}

// 저장 후 조회
function trySetPost(item) {
  setPost(uid.value, item).then(async () => {
    await fetchPosts(uid.value, displayWeek.value[0].fullDate, displayWeek.value[6].fullDate)
    await selectDate({
      year: displayDate.value.getFullYear(),
      month: displayDate.value.getMonth(),
      date: displayDate.value.getDate()
    })
  })
}

// 삭제
function tryDeleteData(standardDate) {
  deletePost(uid.value, standardDate).then(async () => {
    await fetchPosts(uid.value, displayWeek.value[0].fullDate, displayWeek.value[6].fullDate)
    await selectDate({
      year: displayDate.value.getFullYear(),
      month: displayDate.value.getMonth(),
      date: displayDate.value.getDate()
    })
  })
}

// 범위 조회
function tryFetchRange(startFullDate) {
  rangeStartFullDate.value = startFullDate.value
  fetchPosts(uid.value, rangeStartFullDate.value, displayWeek.value[6].fullDate)
}

// 로그아웃
const tryLogOut = async () => {
  await logOut().then((response) => {
    if (response) {
      router.push({
        path: '/'
      })
    }
  })
}
</script>

<style scoped>
.main-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.main-wrap .now-date-wrap {
  display: flex;
  align-items: center;
  flex-direction: row;

  color: #343434;
}
.now-date {
  font-size: 20px;
  font-weight: 400;
  text-align: center;
}
.now-week-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.now-week-wrap > button {
  width: 10%;
}
.now-week-wrap .now-week-one {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 12%;
}
.now-week-wrap .now-week-one .now-week-day {
  color: #343434;
  width: 40px;
  border-radius: 20px;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  margin: 0.4rem;
}
.now-week-wrap .now-week-one .now-week-day.today {
  color: #f2efe7;
  background-color: #343434;
  font-weight: 600;
}
.now-week-wrap .now-week-one .now-week-date {
  color: #343434;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
}
/* 기록 완료 */
.now-week-wrap .now-week-one .now-week-date.did {
  font-weight: 600;
  color: #f2efe7;
  background-color: #343434;
}
/* 미래 */
.now-week-wrap .now-week-one .now-week-date.future {
  cursor: default;
  color: #bababa;
}
.now-week-wrap .now-week-one .now-week-selected {
  width: 40px;
  height: 1px;
  text-align: center;
}
/* 선택한 날짜 */
/* TODO 표현 변경 */
.now-week-wrap .now-week-one .now-week-selected.selected {
  background-color: #343434;
}
.line {
  width: 100%;
  border-bottom: 1px solid #bababa;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
/* 아이콘 이미지 */
.icon-img {
  width: auto;
}
</style>
