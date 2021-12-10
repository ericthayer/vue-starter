import Vue from "vue";
import VueRouter from "vue-router";
import AppView from "../components/AppView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "AppView",
    component: AppView
  },
  {
    path: "/default-template",
    name: "DefaultTemplate",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "default" */ "../components/views/DefaultTemplate.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
