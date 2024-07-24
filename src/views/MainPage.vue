<template>
  <div class="main">
    <div class="now-date">
      <p class="now-year">2024년</p>
      <p class="now-month">7월</p>
    </div>

    <div class="now-week">
      <div class="now-week-one">
        <div class="now-week-day">Mon</div>
        <button class="now-week-date">28</button>
      </div>
      <div class="now-week-one">
        <div class="now-week-day">Mon</div>
        <button class="now-week-date">28</button>
      </div>
      <div class="now-week-one">
        <div class="now-week-day">Mon</div>
        <button class="now-week-date">28</button>
      </div>
      <div class="now-week-one">
        <div class="now-week-day">Mon</div>
        <button class="now-week-date">28</button>
      </div>
      <div class="now-week-one">
        <div class="now-week-day">Mon</div>
        <button class="now-week-date">28</button>
      </div>
      <div class="now-week-one">
        <div class="now-week-day">Mon</div>
        <button class="now-week-date">28</button>
      </div>
      <div class="now-week-one">
        <div class="now-week-day">Mon</div>
        <button class="now-week-date">28</button>
      </div>
    </div>

    <div class="div3">체중</div>
    <div class="_2024-07-01">2024-07-01 금요일</div>
    <div class="group-29">
      <div class="group-28">
        <div class="kg">kg</div>
      </div>
      <input class="_68-5" value="68.5" />
    </div>

    <div class="input-btns">
      <div class="input-btn-row">
        <button class="input-btn-1">1</button>
        <button class="input-btn-1">1</button>
        <button class="input-btn-1">1</button>
        <button class="input-btn-1">0</button>
      </div>
      <div class="input-btn-row">
        <button class="input-btn-1">1</button>
        <button class="input-btn-1">1</button>
        <button class="input-btn-1">1</button>
        <button class="input-btn-1">0</button>
      </div>
      <div class="input-btn-row">
        <button class="input-btn-1">1</button>
        <button class="input-btn-1">1</button>
        <button class="input-btn-1">1</button>
        <button class="input-btn-1">0</button>
      </div>
    </div>

    <!-- TODO 메모 textarea -->
    <!-- TODO 저장하기 버튼 -->
  </div>

  <div class="bnb">
    <div class="bnb-btns">
      <button class="bnb-btn">홈</button>
      <button class="bnb-btn">분석</button>
    </div>
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
  font-family: 'Pretendard-Regular', sans-serif;
  color: #343434;
  position: absolute;
  left: 148px;
  top: 60px;
}
.now-year {
  font-size: 20px;
  font-weight: 400;
}
.now-month {
  font-size: 20px;
  font-weight: 800;
  margin-left: 10px;
}

.rectangle-78 {
  width: 329px;
  height: 34px;
  position: absolute;
  left: 32px;
  top: 618px;
}

.group-2 {
  position: absolute;
  inset: 0;
}

.group-58 {
  position: absolute;
  inset: 0;
}

.now-week {
  display: flex;
  position: absolute;
  top: 13%;
}
.now-week-one {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.now-week-day {
  /* color: #343434; */
  color: #f2efe7;
  background-color: #343434;

  width: 40px;
  height: 22px;
  border-radius: 10px;

  text-align: center;
  font-family: 'NixgonfontsV20-M', sans-serif;
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
  font-family: 'Freesentation-4Regular', sans-serif;
  font-size: 15px;
  font-weight: 400;
}

.div3 {
  color: #343434;
  text-align: left;
  font-family: 'Pretendard-Bold', sans-serif;
  font-size: 20px;
  font-weight: 700;
  position: absolute;
  left: calc(50% - 164.5px);
  top: 225px;
}
._2024-07-01 {
  color: #343434;
  text-align: right;
  font-family: 'Freesentation-5Medium', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  left: calc(50% - -50.5px);
  top: 230px;
}
.group-29 {
  width: 329px;
  height: 59px;
  position: static;
}
.group-28 {
  width: 329px;
  height: 59px;
  position: static;
}

.kg {
  color: #848383;
  text-align: center;
  font-family: 'Freesentation-9Black', sans-serif;
  font-size: 20px;
  font-weight: 400;
  position: absolute;
  left: calc(50% - -130.5px);
  top: 274px;
}
._68-5 {
  color: #848383;
  background-color: #343434;
  text-align: center;

  font-family: 'Freesentation-9Black', sans-serif;
  font-size: 40px;
  font-weight: 400;

  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.15);

  width: 329px;
  height: 59px;
  border-radius: 5px;

  position: absolute;
  left: 32px;
  top: 257px;
}
.input-btns {
  position: absolute;
  top: 38%;
  justify-content: center;
}
.input-btn-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.input-btn-1 {
  color: #343434;
  text-align: center;
  font-family: 'Freesentation-4Regular', sans-serif;
  font-size: 35px;
  font-weight: 400;

  background-color: #ffffff;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.bnb {
  background: #343434;
  width: 100%;
  height: 140px;
  position: fixed;
  top: 85%;
}
.bnb-btns {
  display: flex;
  justify-content: space-between;
}
.bnb-btn {
  color: #f2efe7;
  font-family: 'Freesentation-5Medium', sans-serif;
  font-size: 15px;
  font-weight: 400;

  width: 100%;
}
</style>
