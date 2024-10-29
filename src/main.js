/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Pluginsimport Vue from "vue";
import { registerPlugins } from '@/plugins'
import { createRouter, createWebHistory } from "vue-router";
import VueMaterial from "vue-material";

// Components
import App from './App.vue';

// Composables
import { createApp } from 'vue';

import Film from "./components/Film.vue";
import Home from "./components/Home.vue";
import Videogames from "./components/Videogames.vue";
import DigimonList from "./components/Digimonlist.vue";
import DigimonSimili from "./components/DigimonSimili.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: Home, name: "home"},
        {path: "/home", component: Home, name: "home"},
        {path: "/Film", component: Film, name: "Film"},
        {path: "/DigimonList", component: DigimonList, name: "DigimonList"},
        {path: "/Videogames", component: Videogames, name: "Videogames"},
        {path: "/DigimonSimili", component: DigimonSimili, name: "DigimonSimili"},
      ]
});

const app = createApp(App);

registerPlugins(app);

app.use(VueMaterial);
app.use(router);
app.mount('#app');
