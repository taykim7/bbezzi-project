<template>
  <div class="container">
    <MainHeader />
    <router-view></router-view>
    <MainBnb />
  </div>
</template>

<script setup lang="ts">
import MainBnb from '@/views/layout/MainBnb.vue'
import MainHeader from '@/views/layout/MainHeader.vue'
</script>

<style></style>
