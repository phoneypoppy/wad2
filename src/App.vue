<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation/>
      <router-view />
    </div>
  </div>
</template>

<script>
// added in, min 28.02
import Navigation from "./components/Navigation.vue";
export default {
  name: "app",
  components: { Navigation },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>


<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

  html, body {
  font-family: 'Roboto', sans-serif;
}

#app {
  font-family: 'Roboto', sans-serif;
}
</style>