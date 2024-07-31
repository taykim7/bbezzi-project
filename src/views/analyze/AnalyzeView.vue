<template>
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
</template>

<script setup></script>

<style scoped>
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
