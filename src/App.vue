<script setup>
import Navbar from "./components/Navbar.vue";
import AnimationPage from "./components/AnimationPage.vue";
import { ref } from "vue";

const navs = ref([
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/menu",
    text: "Foods",
  },
]);
</script>
<template>
  <!-- Navbar -->
  <Navbar title="JAJANNN" :navs="navs" />

  <!-- Radio Button -->
  <AnimationPage />
</template>

<style></style>
