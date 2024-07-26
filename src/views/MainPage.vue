<template>
  <div class="main">
    <div class="now-date">
      <img class="now-date-icon" src="../assets/logo.svg" height="19" />
      <div class="now-year"><p>2024년</p></div>
      <div class="now-month"><p>7월</p></div>
    </div>

    <div class="now-week">
      <img class="now-week-icon" src="../assets/logo.svg" height="19" />
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
      <img class="now-week-icon" src="../assets/logo.svg" height="19" />
    </div>

    <div class="line"></div>

    <div class="weight-wrap">
      <div class="weight-title">
        <div class="weight-text">체중</div>
        <div class="weight-date">2024-07-01 금요일</div>
      </div>

      <!-- <div class="weight-position">
        <div class="weight-kg">kg</div>
      </div> -->

      <input class="weight-gram" value="68.5" />
    </div>

    <div class="input-btns">
      <div class="input-btn-row">
        <button class="input-btn-num">1</button>
        <button class="input-btn-num">2</button>
        <button class="input-btn-num">3</button>
        <button class="input-btn-else">
          <img class="input-btn-icon" src="../assets/logo.svg" height="19" />
        </button>
      </div>
      <div class="input-btn-row">
        <button class="input-btn-num">4</button>
        <button class="input-btn-num">5</button>
        <button class="input-btn-num">6</button>
        <button class="input-btn-else">
          <img class="input-btn-icon" src="../assets/logo.svg" height="19" />
        </button>
      </div>
      <div class="input-btn-row">
        <button class="input-btn-num">7</button>
        <button class="input-btn-num">8</button>
        <button class="input-btn-num">9</button>
        <button class="input-btn-else">
          <img class="input-btn-icon" src="../assets/logo.svg" height="19" />
        </button>
      </div>
    </div>

    <!-- TODO 메모 textarea -->
    <div class="input-wrap">
      <div class="input-items">
        <div class="mb40">
          <div class="input-title">메모</div>
          <div class="input-contents">
            <textarea class="input-textarea" placeholder="메모를 입력하세요" rows="1"></textarea>
          </div>
        </div>
      </div>
    </div>

    <!-- TODO 저장하기 버튼 -->
    <!-- 버튼 -->
    <div class="btn-wrap">
      <div class="btn-items">
        <div class="btn-item">
          <!-- <button class="btn-main" @click="movePage">저장하기</button> -->
          <div class="btn-two">
            <button class="btn-main-left" @click="movePage">수정하기</button>
            <button class="btn-main-right" @click="movePage">삭제하기</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bnb">
    <div class="bnb-btns">
      <div class="bnb-home">
        <img class="bnb-icon" src="../assets/logo.svg" height="19" />
        <button class="bnb-btn">홈</button>
      </div>
      <div class="bnb-analyze">
        <img class="bnb-icon" src="../assets/logo.svg" height="19" />
        <button class="bnb-btn">분석</button>
      </div>
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
  align-items: center;
  flex-direction: row;

  color: #343434;
  margin-top: 20%;
}
.now-date-icon {
  width: auto;
}
.now-year {
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  margin-left: 10px;
}
.now-month {
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  margin-left: 10px;
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

.weight-wrap {
  width: 100%;
}
.weight-wrap .weight-title {
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
}
.weight-wrap .weight-title .weight-text {
  color: #343434;
  text-align: left;
  font-size: 20px;
  font-weight: 600;
}

.weight-wrap .weight-title .weight-date {
  color: #343434;
  text-align: right;
  font-size: 15px;
  font-weight: 400;
}

.weight-position {
  position: absolute;
  left: calc(50% - -130.5px);
  top: 274px;
  z-index: 1;
}

.weight-kg {
  color: #848383;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
}
.weight-gram {
  color: #848383;
  background-color: #343434;
  text-align: center;

  font-size: 40px;
  font-weight: 400;

  width: 100%;
  height: 60px;
  border-radius: 5px;

  margin-top: 1rem;
}

.input-btns {
  /* background-color: red; */
  margin-top: 2rem;
  width: 100%;
}
.input-btn-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 14px;
}

.input-btn-num {
  color: #343434;
  text-align: center;
  font-size: 35px;
  font-weight: 400;

  background-color: #ffffff;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.input-btn-else {
  color: #343434;
  text-align: center;
  font-size: 35px;
  font-weight: 400;

  background-color: #fff9eb;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.input-wrap {
  width: 100%;

  margin-top: 2rem;
}
.input-wrap .input-items .input-title {
  color: #343434;
  text-align: left;
  font-size: 20px;
  font-weight: 600;

  margin-bottom: 10px;
}
.input-wrap .input-items .input-contents {
  display: flex;
  justify-content: space-between;
}
.input-wrap .input-items .input-contents .input-textarea {
  color: #343434;
  text-align: left;
  font-size: 15px;
  font-weight: 600;

  border-width: 0 0 1px;
  background: transparent;
  width: 100%;
  padding: 5px 0 5px 0;
}
.input-wrap .input-items .input-contents .input-textarea::placeholder {
  color: #bababa;
}
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
  margin-bottom: 10px;
}
.bnb-btns .bnb-btn {
  color: #f2efe7;
  font-size: 15px;
  font-weight: 400;
  width: 100%;
}
</style>
