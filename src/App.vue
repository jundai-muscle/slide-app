<template>
  <v-app>
    <Login></Login>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Login from "./components/Users.vue";
export default {
  name: "App",
  components: {
    Login,
  },
  data: () => ({
    //
  }),
};
</script>
