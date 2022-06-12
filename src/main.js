import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { initializeApp } from "firebase/app";

const config = {
  apiKey: "AIzaSyAJzCmC68GeoIQU09jWaHG0JmN94RNSUao",
  authDomain: "login-3ad54.firebaseapp.com",
  projectId: "login-3ad54",
  storageBucket: "login-3ad54.appspot.com",
  messagingSenderId: "294870895007",
  appId: "1:294870895007:web:21a68d3b765cdb5b0755aa",
  measurementId: "G-RVZPG4C43D",
};

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

const firebaseApp = initializeApp(config);
export default firebaseApp;
