<template>
  <div class="main">
    <div class="now-date">
      <img class="now-date-icon" src="../assets/img/svg/icon_calendar.svg" height="25" />
      <div class="now-year"><p>2024년</p></div>
      <div class="now-month"><p>7월</p></div>
    </div>

    <div class="now-week">
      <img class="now-week-icon" src="../assets/img/svg/icon_before.svg" height="25" />
      <div class="now-week-one">
        <div class="now-week-day">Mon</div>
        <button class="now-week-date">28</button>
      </div>
      <div class="now-week-one">
        <div class="now-week-day">Tue</div>
        <button class="now-week-date">28</button>
      </div>
      <div class="now-week-one">
        <div class="now-week-day">Wed</div>
        <button class="now-week-date">28</button>
      </div>
      <div class="now-week-one">
        <div class="now-week-day">Thu</div>
        <button class="now-week-date">28</button>
      </div>
      <div class="now-week-one">
        <div class="now-week-day">Fri</div>
        <button class="now-week-date">28</button>
      </div>
      <div class="now-week-one">
        <div class="now-week-day">Sat</div>
        <button class="now-week-date">28</button>
      </div>
      <div class="now-week-one">
        <div class="now-week-day">Sun</div>
        <button class="now-week-date">28</button>
      </div>
      <img class="now-week-icon" src="../assets/img/svg/icon_after.svg" height="25" />
    </div>

    <div class="line"></div>

    <RouterView></RouterView>
  </div>
</template>

<script setup></script>

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
  margin-left: 5px;
}
.now-month {
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  margin-left: 5px;
}
.now-week {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
}
.now-week-one {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.now-week-day {
  color: #f2efe7;
  background-color: #343434;

  width: 40px;
  border-radius: 20px;

  text-align: center;
  font-size: 15px;
  font-weight: 400;
}
.now-week-date {
  /* background-color: none; */
  /* background-color: #fff9eb; */
  color: #f2efe7;
  background-color: #343434;
  width: 45px;
  height: 45px;
  border-radius: 50%;

  text-align: center;
  font-size: 15px;
  font-weight: 400;

  margin-top: 8px;
}
.line {
  width: 100%;
  border-bottom: 1px solid #bababa;
  margin-top: 3rem;
  margin-bottom: 3rem;
}
</style>
