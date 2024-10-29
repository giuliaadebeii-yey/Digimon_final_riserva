import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueMaterial from "vue-material";

import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default-dark.css";

import Film from "./components/Film";
import Home from "./components/Home";
import Videogames from "./components/Videogames";
import DigimonList from "./components/Digimonlist";
import DigimonSimili from "./components/DigimonSimili";
import Dataservice from "./database";

Vue.use(VueMaterial);
Vue.use(VueRouter);

Vue.config.productionTip = false;

//collegamenti delle pagine
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      name: "Home",
      path: "/home",
      component: Home,
    },
    { path: "/", redirect: "/home" }, // di default va alla homepage

    {
      name: "Videogames",
      path: "/videogames",
      component: Videogames,
    },
    {
      name: "DigimonList",
      path: "/digimonList",
      component: DigimonList,
    },
    {
      name: "Digimon",
      path: "/digimonlist/:name",
      component: DigimonSimili,
    },
    {
      name: "Film",
      path: "/Film",
      component: Film,
    },
  ],
});

new Vue({
  router, // corrisponde a router: router;
  render: (h) => h(App),
}).$mount("#app");
