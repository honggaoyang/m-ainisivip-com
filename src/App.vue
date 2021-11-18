<template>
  <Header />
  <router-view></router-view>
  <Footer />
  <footer-bar />
</template>

<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
import FooterBar from "@/components/footer/FooterBar.vue";
export default {
  name: "App",
  components: { Header, Footer, FooterBar },
};
</script>

<style>
@import "../src/assets/Global.css";
</style>
