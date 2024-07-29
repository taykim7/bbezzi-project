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

    <!--  -->

    <div class="chart-wrap">
      <div class="mb40">
        <div class="chart-title">기간 설정</div>
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
        <div class="chart-title">업적 (1년)</div>

        <div class="did-list">
          <div class="did-title mb8">320일의 체중을 기록하였습니다!</div>
          <div class="did-title">2.3 kg 감량했습니다!</div>
        </div>
      </div>
    </div>

    <div class="chart-wrap">
      <div class="mb40">
        <div class="chart-title">리스트</div>
        <div class="_366">총 366 건</div>
        <div class="did-list">
          <div class="did-title mb8">320일의 체중을 기록하였습니다!</div>
          <div class="did-title">2.3 kg 감량했습니다!</div>
        </div>
      </div>
    </div>

    <!--
    <div class="group-63">
      <div class="rectangle-27"></div>
      <div class="_2024-07-01">2024.07.01</div>
      <div class="_68-7">68.7</div>
      <div class="div4">배가 너무너무 고프다 오 ...</div>
      <div class="rectangle-29"></div>
      <div class="rectangle-30"></div>
    </div>
    <div class="group-62">
      <div class="rectangle-88"></div>
      <div class="_2024-07-012">2024.07.01</div>
      <div class="_68-72">68.7</div>
      <div class="div5">
        배가 너무너무 고프다 어쩌구저쩌구 배가 너무너무 고프다 어쩌구저쩌구 배가 너무너무 고프다
        어쩌구저쩌구 배가 너무너무 고프다 어쩌구저쩌구
      </div>
      <div class="rectangle-89"></div>
      <div class="rectangle-90"></div>
    </div>
    <div class="group-61">
      <div class="rectangle-100"></div>
      <div class="_2024-07-013">2024.07.01</div>
      <div class="_68-73">68.7</div>
      <div class="div6">배가 너무너무 고프다 오 ...</div>
      <div class="rectangle-101"></div>
      <div class="rectangle-102"></div>
    </div> -->

    <!-- 계산기 -->
    <!-- <div class="weight-wrap">
      <div class="weight-title">
        <div class="weight-text">체중</div>
        <div class="weight-date">2024-07-01 금요일</div>
      </div>

      <input class="weight-gram" value="68.5" />
    </div> -->

    <!-- <div class="input-btns">
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
    </div> -->

    <!-- TODO 메모 textarea -->
    <!-- <div class="input-wrap">
      <div class="input-items">
        <div class="mb40">
          <div class="input-title">메모</div>
          <div class="input-contents">
            <textarea class="input-textarea" placeholder="메모를 입력하세요" rows="1"></textarea>
          </div>
        </div>
      </div>
    </div> -->

    <!-- TODO 저장하기 버튼 -->
    <!-- 버튼 -->
    <!-- <div class="btn-wrap">
      <div class="btn-items">
        <div class="btn-item">
          <div class="btn-two">
            <button class="btn-main-left" @click="movePage">수정하기</button>
            <button class="btn-main-right" @click="movePage">삭제하기</button>
          </div>
        </div>
      </div>
    </div> -->
  </div>

  <!-- <div class="bnb">
    <div class="bnb-btns">
      <div class="bnb-home">
        <img class="bnb-icon" src="../assets/logo.svg" height="19" />
        <button class="bnb-btn">홈</button>
      </div>
      <div class="bnb-analyze">
        <img class="bnb-icon" src="../assets/logo.svg" height="19" />
        <button class="bnb-btn" @click="movePage">분석</button>
      </div>
    </div>
  </div> -->
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const movePage = () => {
  router.push({
    name: 'AnalyzePage'
  })
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

/* TODO  */

.chart-wrap {
  width: 100%;
  margin-top: 2rem;
}
.chart-wrap .chart-title {
  color: #343434;
  text-align: left;
  font-size: 20px;
  font-weight: 600;

  margin-bottom: 10px;
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

.rectangle-77 {
  background: #343434;
  width: 421px;
  height: 139px;
  position: absolute;
  left: calc(50% - 210.5px);
  top: 1061px;
}
.group-73 {
  position: absolute;
  inset: 0;
}
.rectangle-2 {
  background: #343434;
  border-radius: 10px;
  width: 34px;
  height: 19px;
  position: absolute;
  left: 225px;
  top: 104px;
}
.ellipse-1 {
  background: #fff9eb;
  border-radius: 50%;
  width: 45px;
  height: 44px;
  position: absolute;
  left: 40px;
  top: 132px;
}
.ellipse-2 {
  background: #343434;
  border-radius: 50%;
  width: 45px;
  height: 44px;
  position: absolute;
  left: 85px;
  top: 132px;
}
.ellipse-3 {
  background: #343434;
  border-radius: 50%;
  width: 45px;
  height: 44px;
  position: absolute;
  left: 130px;
  top: 132px;
}
.ellipse-4 {
  background: #fff9eb;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  position: absolute;
  left: 175px;
  top: 132px;
}
.ellipse-6 {
  background: #fff9eb;
  border-radius: 50%;
  width: 45px;
  height: 44px;
  position: absolute;
  left: 264px;
  top: 132px;
}
.ellipse-7 {
  background: #fff9eb;
  border-radius: 50%;
  width: 45px;
  height: 44px;
  position: absolute;
  left: 309px;
  top: 132px;
}
._28 {
  color: #1e1e1e;
  text-align: center;
  font-family: 'Freesentation-4Regular', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  left: 54px;
  top: 145px;
}
.mon {
  color: #343434;
  text-align: center;
  font-family: 'NixgonfontsV20-M', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  left: 47px;
  top: 106px;
}
.group-2 {
  width: 98px;
  height: 24px;
  position: static;
}
._2024 {
  color: #343434;
  text-align: left;
  font-family: 'Pretendard-Regular', sans-serif;
  font-size: 20px;
  font-weight: 400;
  position: absolute;
  left: 148px;
  top: 60px;
}
._7 {
  color: #343434;
  text-align: left;
  font-family: 'Pretendard-ExtraBold', sans-serif;
  font-size: 20px;
  font-weight: 800;
  position: absolute;
  left: 217px;
  top: 60px;
}
._29 {
  color: #f2efe7;
  text-align: center;
  font-family: 'Freesentation-4Regular', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  left: 99px;
  top: 145px;
}
.tue {
  color: #343434;
  text-align: center;
  font-family: 'NixgonfontsV20-M', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  left: 95px;
  top: 106px;
}
._30 {
  color: #f2efe7;
  text-align: center;
  font-family: 'Freesentation-4Regular', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  left: 144px;
  top: 145px;
}
.wed {
  color: #343434;
  text-align: center;
  font-family: 'NixgonfontsV20-M', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  left: 137px;
  top: 106px;
}
._31 {
  color: #1e1e1e;
  text-align: center;
  font-family: 'Freesentation-4Regular', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  left: 189px;
  top: 145px;
}
.thu {
  color: #343434;
  text-align: center;
  font-family: 'NixgonfontsV20-M', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  left: 185px;
  top: 106px;
}
._2 {
  color: #1e1e1e;
  text-align: center;
  font-family: 'Freesentation-4Regular', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  left: 282px;
  top: 145px;
}
.sat {
  color: #343434;
  text-align: center;
  font-family: 'NixgonfontsV20-M', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  left: 276px;
  top: 106px;
}
._3 {
  color: #1e1e1e;
  text-align: center;
  font-family: 'Freesentation-4Regular', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  left: 327px;
  top: 145px;
}
.sun {
  color: #343434;
  text-align: center;
  font-family: 'NixgonfontsV20-M', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  left: 323px;
  top: 106px;
}
.ellipse-5 {
  background: #343434;
  border-radius: 50%;
  border-style: solid;
  border-color: #343434;
  border-width: 2px;
  width: 45px;
  height: 44px;
  position: absolute;
  left: 219px;
  top: 131px;
}
._1 {
  color: #f2efe7;
  text-align: center;
  font-family: 'Freesentation-9Black', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  left: 237px;
  top: 144px;
}
.fri {
  color: #f2efe7;
  text-align: center;
  font-family: 'NixgonfontsV20-B', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  left: 232px;
  top: 106px;
}
.vector-2 {
  width: 389.5px;
  height: 0px;
  position: absolute;
  left: calc(50% - 194.5px);
  top: 204px;
  overflow: visible;
}
.group-1 {
  width: 91.33%;
  height: 1.49%;
  position: absolute;
  right: 4.36%;
  left: 4.31%;
  bottom: 86.47%;
  top: 12.04%;
  overflow: visible;
}
.vector {
  width: 3.82%;
  height: 1.42%;
  position: absolute;
  right: 64.38%;
  left: 31.81%;
  bottom: 93.33%;
  top: 5.25%;
  overflow: visible;
}
.div {
  color: #848383;
  text-align: center;
  font-family: 'Freesentation-5Medium', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  left: 82px;
  top: 1110px;
}
.div2 {
  color: #f2efe7;
  text-align: center;
  font-family: 'Freesentation-5Medium', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  left: 292px;
  top: 1110px;
}
.vector2 {
  width: 4.58%;
  height: 1.67%;
  position: absolute;
  right: 75.32%;
  left: 20.1%;
  bottom: 8.33%;
  top: 90%;
  overflow: visible;
}
.vector3 {
  width: 4.58%;
  height: 1.67%;
  position: absolute;
  right: 20.36%;
  left: 75.06%;
  bottom: 8.33%;
  top: 90%;
  overflow: visible;
}
.group-64 {
  position: absolute;
  inset: 0;
}
.div3 {
  color: #343434;
  text-align: left;
  font-family: 'Pretendard-SemiBold', sans-serif;
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  left: 32px;
  top: 753px;
}

.group-63 {
  width: 329px;
  height: 39px;
  position: static;
}
.rectangle-27 {
  background: #343434;
  border-radius: 5px;
  width: 329px;
  height: 39px;
  position: absolute;
  left: calc(50% - 164.5px);
  top: 811px;
}
._2024-07-01 {
  color: #f2efe7;
  text-align: left;
  font-family: 'Freesentation-2ExtraLight', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  left: 45px;
  top: 822px;
}
._68-7 {
  color: #f2efe7;
  text-align: left;
  font-family: 'Freesentation-9Black', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  left: 133px;
  top: 822px;
}
.div4 {
  color: #f2efe7;
  text-align: left;
  font-family: 'Freesentation-4Regular', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  left: 179px;
  top: 823px;
}
.rectangle-29 {
  background: #706f6f;
  border-radius: 10px;
  width: 16px;
  height: 15px;
  position: absolute;
  left: 312px;
  top: 823px;
}
.rectangle-30 {
  background: #706f6f;
  border-radius: 10px;
  width: 16px;
  height: 15px;
  position: absolute;
  left: 333px;
  top: 823px;
}
.group-62 {
  width: 329px;
  height: 129px;
  position: static;
}
.rectangle-88 {
  background: #343434;
  border-radius: 5px;
  width: 329px;
  height: 129px;
  position: absolute;
  left: calc(50% - 164.5px);
  top: 860px;
}
._2024-07-012 {
  color: #f2efe7;
  text-align: left;
  font-family: 'Freesentation-2ExtraLight', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  left: 45px;
  top: 871px;
}
._68-72 {
  color: #f2efe7;
  text-align: left;
  font-family: 'Freesentation-9Black', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  left: 133px;
  top: 871px;
}
.div5 {
  color: #f2efe7;
  text-align: left;
  font-family: 'Freesentation-4Regular', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  left: 179px;
  top: 872px;
  width: 130px;
  height: 105px;
}
.rectangle-89 {
  background: #706f6f;
  border-radius: 10px;
  width: 16px;
  height: 15px;
  position: absolute;
  left: 312px;
  top: 872px;
}
.rectangle-90 {
  background: #706f6f;
  border-radius: 10px;
  width: 16px;
  height: 15px;
  position: absolute;
  left: 333px;
  top: 872px;
}
.group-61 {
  width: 329px;
  height: 39px;
  position: static;
}
.rectangle-100 {
  background: #343434;
  border-radius: 5px;
  width: 329px;
  height: 39px;
  position: absolute;
  left: calc(50% - 164.5px);
  top: 999px;
}
._2024-07-013 {
  color: #f2efe7;
  text-align: left;
  font-family: 'Freesentation-2ExtraLight', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  left: 45px;
  top: 1010px;
}
._68-73 {
  color: #f2efe7;
  text-align: left;
  font-family: 'Freesentation-9Black', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  left: 133px;
  top: 1010px;
}
.div6 {
  color: #f2efe7;
  text-align: left;
  font-family: 'Freesentation-4Regular', sans-serif;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  left: 179px;
  top: 1011px;
}
.rectangle-101 {
  background: #706f6f;
  border-radius: 10px;
  width: 16px;
  height: 15px;
  position: absolute;
  left: 312px;
  top: 1011px;
}
.rectangle-102 {
  background: #706f6f;
  border-radius: 10px;
  width: 16px;
  height: 15px;
  position: absolute;
  left: 333px;
  top: 1011px;
}
.group-72 {
  position: absolute;
  inset: 0;
}
.div7 {
  color: #343434;
  text-align: left;
  font-family: 'Pretendard-Bold', sans-serif;
  font-size: 20px;
  font-weight: 700;
  position: absolute;
  left: calc(50% - 163.5px);
  top: 230px;
}
.group-68 {
  width: 70px;
  height: 28px;
  position: static;
}

.group-69 {
  width: 70px;
  height: 28px;
  position: static;
}

.group-71 {
  width: 70px;
  height: 28px;
  position: static;
}
.rectangle-81 {
  background: #fff9eb;
  border-radius: 5px;
  width: 70px;
  height: 28px;
  position: absolute;
  left: 291px;
  top: 265px;
}

.group-70 {
  width: 70px;
  height: 28px;
  position: static;
}
.rectangle-80 {
  background: #fff9eb;
  border-radius: 5px;
  width: 70px;
  height: 28px;
  position: absolute;
  left: 205px;
  top: 265px;
}

.group-60 {
  position: absolute;
  inset: 0;
}

.group-67 {
  position: absolute;
  inset: 0;
}
._15 {
  color: #343434;
  text-align: left;
  font-family: 'Pretendard-SemiBold', sans-serif;
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  left: 32px;
  top: 604px;
}

.group-65 {
  width: 329px;
  height: 39px;
  position: static;
}
.rectangle-104 {
  background: #343434;
  border-radius: 5px;
  width: 329px;
  height: 39px;
  position: absolute;
  left: calc(50% - 164.5px);
  top: 686px;
}
._2-3-kg {
  color: var(--background, #f2efe7);
  text-align: center;
  font-family: 'Pretendard-Bold', sans-serif;
  font-size: 20px;
  font-weight: 700;
  position: absolute;
  left: calc(50% - 86.5px);
  top: 694px;
}
</style>
