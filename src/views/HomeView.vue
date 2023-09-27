<template>
  <div class="container">
    <HeroPage />
    <div class="row section mb-8">
      <div
        class="col"
        data-aos="fade-up-left"
        data-aos-delay="50"
        data-aos-duration="3000"
      >
        <h2>Best <strong>Foods</strong></h2>
      </div>
      <div class="col">
        <router-link
          to="/menu"
          class="btn btn-success float-end d-flex gap-2"
          data-aos="fade-up-right"
          data-aos-delay="50"
          data-aos-duration="3000"
          ><box-icon name="bowl-hot" color="#ffffff" />
          <span> See All Menus</span>
        </router-link>
      </div>
      <!-- Card Menu -->
      <CardMenu />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import HeroPage from "../components/HeroPage.vue";
import CardMenu from "../components/CardMenu.vue";
</script>

<style>
/* .section {
  height: 100vh;
} */
</style>
