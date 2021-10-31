<template>
  <div class="app-wrapper">
    <div class="app">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
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