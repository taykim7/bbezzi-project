<template>
  <swiper
    :spaceBetween="30"
    :pagination="{
      clickable: true
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><div class="item">매일 매일 간편하게 체중을 기록해요</div></swiper-slide>
    <swiper-slide><div class="item">그래프로 체중 변화를 파악하고 추적해요</div></swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

const modules = [Pagination]
</script>

<style>
.swiper {
  width: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.8rem;
}
.swiper-slide .item {
  width: 100%;
  height: 30rem;
  background-color: wheat;
}
.swiper-slide img {
  display: block;
  height: 100%;
  object-fit: cover;
  max-width: 70rem;
}
.swiper-pagination .swiper-pagination-bullet {
  background: #343434;
  border-radius: 10px;
  width: 10px;
  height: 10px;
}
.swiper-pagination .swiper-pagination-bullet-active {
  background: #343434;
  border-radius: 10px;
  width: 30px;
  height: 10px;
}
.swiper-pagination {
  display: block;
  position: relative;
  bottom: 0% !important;
}
</style>
