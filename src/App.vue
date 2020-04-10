<template>
  <v-app>
    <v-content>
      <Header />
      <router-view />
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
#app {
  max-width: 100%;
}
</style>
