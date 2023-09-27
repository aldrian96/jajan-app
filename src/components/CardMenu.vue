<template>
  <div class="row">
    <div class="col-md-3 mt-4" v-for="item in menuItems" :key="item.id">
      <div class="card" style="width: 18rem">
        <img
          :src="'./assets/img/' + item.gambar"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{{ item.nama }}</h5>
          <p class="card-text">{{ item.harga }}</p>
          <p class="card-text">
            {{ item.is_ready ? "Tersedia" : "Tidak Tersedia" }}
          </p>
          <router-link
            to="/menu"
            class="btn btn-success float-start d-flex gap-2"
            ><box-icon name="cart-add" type="solid" color="#ffffff" />
            <span>Order</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const menuItems = ref([]);

onMounted(() => {
  axios
    .get("http://localhost:3000/best-products")
    .then((response) => {
      menuItems.value = response.data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
</script>

<style scoped>
.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}
</style>
