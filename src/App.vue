<template>
  <div id="app">
    <div class="container-wrappper">
      <Header />
      <main class="main-wrapper">
        <div class="container">
          <Menu></Menu>
          <transition name="transition-router">
            <router-view></router-view>
          </transition>
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import Menu from "@/components/Menu";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Menu
  }
};
</script>

<style lang="sass" scope></style>
