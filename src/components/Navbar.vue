<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  navs: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mb-5">
    <div class="container">
      <a class="navbar-brand" href="#">{{ props.title }}</a>
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
      <div class="collapse navbar-collapse gap-3" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="navItem in navs" :key="navItem">
            <router-link class="nav-link active" :to="navItem.to">{{
              navItem.text
            }}</router-link>
          </li>
        </ul>
        <!-- <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
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
        <ul class="navbar-nav">
          <li class="nav-item">
            <button
              type="button"
              class="btn position-relative"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style="background-color: #f0f0f0"
            >
              <box-icon
                name="cog"
                type="solid"
                animation="tada-hover"
                color="#afafaf"
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style></style>
