<template>
  <swiper
    :spaceBetween="30"
    :pagination="{
      clickable: true
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
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
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background-color: #d9d9d9;
  height: 35rem;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper-pagination .swiper-pagination-bullet {
  background: #ffffff;
  border-radius: 10px;
  width: 13px;
  height: 13px;
}
.swiper-pagination .swiper-pagination-bullet-active {
  background: #343434;
  border-radius: 10px;
  width: 32px;
  height: 13px;
}
</style>
