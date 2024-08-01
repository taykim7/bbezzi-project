<template>
  <div class="weight-wrap">
    <div class="weight-title">
      <div class="weight-text">체중</div>
      <div class="weight-date">2024-07-01 금요일</div>
    </div>
    <div class="weight-position">
      <div class="weight-kg">kg</div>
    </div>
    <input class="weight-gram" value="68.5" />
  </div>

  <div class="input-btns">
    <div class="input-btn-row">
      <button class="input-btn-num">1</button>
      <button class="input-btn-num">2</button>
      <button class="input-btn-num">3</button>
      <button class="input-btn-else">
        <img
          class="input-btn-icon"
          src="../../assets/img/svg/icon_clear.svg"
          height="40"
          alt="전체제거"
        />
      </button>
    </div>
    <div class="input-btn-row">
      <button class="input-btn-num">4</button>
      <button class="input-btn-num">5</button>
      <button class="input-btn-num">6</button>
      <button class="input-btn-else">
        <img
          class="input-btn-icon"
          src="../../assets/img/svg/icon_cancel.svg"
          height="40"
          alt="지우기"
        />
      </button>
    </div>
    <div class="input-btn-row">
      <button class="input-btn-num">7</button>
      <button class="input-btn-num">8</button>
      <button class="input-btn-num">9</button>
      <button class="input-btn-else">.</button>
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
          <button class="btn-main-left">수정하기</button>
          <button class="btn-main-right">삭제하기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
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

  display: flex;
  justify-content: center;
  align-items: center;
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
</style>
