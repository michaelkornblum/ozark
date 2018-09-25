import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import UserDetails from "./views/UserDetails.vue";
import store from "./store";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/user/:id",
      name: "user",
      component: UserDetails,
      beforeEnter(to, from, next) {
        to.params.id == store.state.currentUser.id ? next() : next('/');
      } 
    }
  ]
});
