<template>
  <v-app>
    <v-main class="main">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import Login from "./components/Users.vue";
export default {
  name: "App",
  components: {},
  created() {
    this.$router.push(`/`);
  },
};
</script>

<style scoped>
.main {
  overflow: auto;
}
</style>
