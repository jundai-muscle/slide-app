import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "loginForm",
    component: () => import("../components/LoginForm"),
  },
  {
    path: "/top",
    name: "topForm",
    component: () => import("../components/Top"),
  },
  {
    path: "/create",
    name: "createUsers",
    component: () => import("../components/Users"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
