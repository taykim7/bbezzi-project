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

    <div class="chart-wrap">
      <div class="mb40">
        <div class="chart-title mb8">기간 설정</div>
        <div class="chart-btns">
          <button class="chart-btn-selected">1년</button>
          <button class="chart-btn">6개월</button>
          <button class="chart-btn">1주일</button>
          <button class="chart-btn">1개월</button>
        </div>
        <div class="chart-date">
          <p>2023-07-01 월요일</p>
          <p class="ml8 mr8">~</p>
          <p>2024-07-14 금요일</p>
        </div>
        <div class="chart-space"></div>
      </div>
    </div>

    <div class="chart-wrap">
      <div class="mb40">
        <div class="chart-title mb8">업적 (1년)</div>
        <div class="did-list">
          <div class="did-title mb8">320일의 체중을 기록하였습니다!</div>
          <div class="did-title">2.3 kg 감량했습니다!</div>
        </div>
      </div>
    </div>

    <div class="list-wrap">
      <div class="list-title mb8">리스트</div>
      <div class="list-count mb8">총 366 건</div>
      <div class="list-items">
        <!-- 아이템1 -->
        <div class="list-item">
          <p class="list-date mr8">2024.07.01</p>
          <p class="list-gram mr8">68.7</p>
          <textarea class="list-memo mr8" readonly>배가 너무너무 고프다 오 ...</textarea>
          <div class="list-btn-wrap">
            <button class="list-edit mr8">
              <img class="now-week-icon" src="../assets/logo.svg" height="19" />
            </button>
            <button class="list-delete">
              <img class="now-week-icon" src="../assets/logo.svg" height="19" />
            </button>
          </div>
        </div>
        <!-- 아이템2 -->
        <div class="list-item-detail">
          <p class="list-date mr8">2024.07.01</p>
          <p class="list-gram mr8">68.7</p>
          <textarea class="list-memo mr8">배가 너무너무 고프다 오 ...</textarea>
          <div class="list-btn-wrap">
            <button class="list-edit mr8">
              <img class="now-week-icon" src="../assets/logo.svg" height="19" />
            </button>
            <button class="list-delete">
              <img class="now-week-icon" src="../assets/logo.svg" height="19" />
            </button>
          </div>
        </div>
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
  margin-top: 10rem;
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

.chart-wrap {
  width: 100%;
  margin-top: 2rem;
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
  gap: 16px;
}
.chart-btn {
  color: #343434;
  text-align: center;
  font-size: 15px;
  font-weight: 300;
  background: #fff9eb;
  border-radius: 5px;
  width: 100%;
  height: 28px;
}
.chart-btn-selected {
  color: #f2efe7;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  background: #343434;
  border-radius: 5px;
  width: 100%;
  height: 28px;
}
.chart-date {
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
}
.chart-date p {
  color: #343434;
  font-size: 15px;
  font-weight: 400;
  font-weight: 400;
}
.chart-space {
  background: #ffffff;
  border-radius: 5px;
  width: 100%;
  height: 300px;
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
  margin-bottom: 0.8rem;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.list-date {
  color: #f2efe7;
  text-align: left;
  font-size: 15px;
  font-weight: 400;
  align-items: center;
  justify-content: center;
}
.list-gram {
  color: #f2efe7;
  text-align: left;
  font-size: 15px;
  font-weight: 400;
}
.list-item-detail {
  background-color: #343434;
  border-radius: 5px;
  height: 129px;
  display: flex;
  align-items: top;
  margin-bottom: 0.8rem;
  padding: 10px;

  justify-content: space-between;
}
.list-item .list-memo {
  background: transparent;
  width: 50%;
  color: #f2efe7;
  text-align: left;
  font-size: 15px;
  font-weight: 400;
}
.list-item-detail .list-memo {
  background: transparent;
  width: 50%;
  height: 100%;
  color: #f2efe7;
  text-align: left;
  font-size: 15px;
  font-weight: 400;
}
.list-edit {
  background: #706f6f;
  border-radius: 10px;
  width: 16px;
  height: 15px;
}
.list-delete {
  background: #706f6f;
  border-radius: 10px;
  width: 16px;
  height: 15px;
}
</style>
