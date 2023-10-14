<script setup>
import { ref } from "vue";
const anim = ref("fade");
</script>
<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Animation Page
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="container d-flex mx-auto">
            <label>Select Animation: </label>
            <div class="form-check">
              <label>
                <input type="radio" name="anim" value="fade" v-model="anim" />
                Fade
              </label>
            </div>
            <div class="form-check">
              <label>
                <input type="radio" name="anim" value="slide" v-model="anim" />
                Slide
              </label>
            </div>
            <div class="form-check">
              <label>
                <input
                  type="radio"
                  name="anim"
                  value="slide-down"
                  v-model="anim"
                />
                Slide Down
              </label>
            </div>
            <div class="form-check">
              <label>
                <input
                  type="radio"
                  name="anim"
                  value="grow-in"
                  v-model="anim"
                />
                Grow In
              </label>
            </div>
            <div class="form-check">
              <label>
                <input
                  type="radio"
                  name="anim"
                  value="grow-out"
                  v-model="anim"
                />
                Grow Out
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            Ok
          </button>
        </div>
      </div>
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
