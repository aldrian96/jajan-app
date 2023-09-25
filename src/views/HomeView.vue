<template>
  <div class="container">
    <Hero />

    <div class="row mb-8">
      <div class="col" data-aos="fade-up">
        <h2>Best <strong>Foods</strong></h2>
      </div>
      <div class="col">
        <router-link to="/menu" class="btn btn-success float-end d-flex gap-2"
          ><box-icon name="bowl-hot" color="#ffffff" />
          <span> See All Menus</span>
        </router-link>
      </div>
      <div class="row">
        <h1>HALOOO</h1>
        <h1>HALOOO</h1>
        <h1>HALOOO</h1>
        <h1>HALOOO</h1>
        <h1>HALOOO</h1>
        <h1>HALOOO</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import Hero from "../components/Hero.vue";
</script>

<style></style>
