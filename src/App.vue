<script setup>
// import { RouterLink, RouterView } from "vue-router";
// import HomeView from "./views/HomeView.vue";
// import MenuView from "./views/MenuView.vue";

import { ref } from "vue";

const anim = ref("fade");
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mb-5">
    <div class="container">
      <a class="navbar-brand" href="#">JAJAN</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/menu">Foods</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" to="/keranjang">
              <button
                type="button"
                class="btn position-relative"
                style="background-color: #f0f0f0"
              >
                <box-icon
                  name="cart"
                  type="solid"
                  animation="tada-hover"
                  color="#afafaf"
                />
                <span
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                >
                  99+
                  <span class="visually-hidden">unread messages</span>
                </span>
              </button>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Radio Button -->
  <div class="container d-flex">
    <label>Select Animation :</label>
    <div class="form-check">
      <label>
        <input type="radio" name="anim" value="fade" v-model="anim" /> Fade
      </label>
    </div>
    <div class="form-check">
      <label>
        <input type="radio" name="anim" value="slide" v-model="anim" /> Slide
      </label>
    </div>
    <div class="form-check">
      <label>
        <input type="radio" name="anim" value="slide-down" v-model="anim" />
        Slide Down
      </label>
    </div>
    <div class="form-check">
      <label>
        <input type="radio" name="anim" value="grow-in" v-model="anim" /> Grow
        In
      </label>
    </div>
    <div class="form-check">
      <label>
        <input type="radio" name="anim" value="grow-out" v-model="anim" /> Grow
        Out
      </label>
    </div>
  </div>

  <!-- Animation -->
  <router-view v-slot="{ Component }">
    <transition :name="anim" mode="out-in">
      <Component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
/* Fade Animation */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}
/* Slide Animation */
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.3s ease-out;
}
/* Slide Down Animation */
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(300px);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: 0.3s ease-out;
}
/* Grow In Animation */
.grow-in-enter-from,
.grow-in-leave-to {
  opacity: 0;
  transform: scale(0.3);
}

.grow-in-enter-active,
.grow-in-leave-active {
  transition: 0.3s ease-out;
}
/* Grow Out Animation */
.grow-out-enter-from,
.grow-out-leave-to {
  opacity: 0;
  transform: scale(1.5);
}

.grow-out-enter-active,
.grow-out-leave-active {
  transition: 0.3s ease-out;
}
</style>
