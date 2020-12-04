<template>
  <header class="header-wrapper">
    <div class="container">
      <div class="navbar">
        <router-link tag="a" class="trans" to="/">
          <div class="d-flex align-items-center">
            <div>
              <img
                src="@/assets/logo.png"
                width="30"
                class="d-inline-block align-top"
                alt=""
                loading="lazy"
              />
            </div>
            <div>
              <span class="project-name">{{ $store.state.projectName }}</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="sass" scope></style>
