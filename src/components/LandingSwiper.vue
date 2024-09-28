<template>
  <swiper
    :spaceBetween="30"
    :pagination="{
      clickable: true
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><img src="@/assets/img/img/test1.png" alt="test" /></swiper-slide>
    <swiper-slide><img src="@/assets/img/img/test1.png" alt="test" /></swiper-slide>
    <swiper-slide><img src="@/assets/img/img/test1.png" alt="test" /></swiper-slide>
    <swiper-slide><img src="@/assets/img/img/test1.png" alt="test" /></swiper-slide>
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
  background-color: #d9d9d9;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.8rem;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
