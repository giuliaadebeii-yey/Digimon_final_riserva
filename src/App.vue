<template>
  <div class="page-container">
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button" @click="showNavigation = true">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title"><b>DIGIMON</b></span>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="showNavigation">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title" style="font-style: bold; letter-spacing: 1px"
            >DIGIMON</span
          >
        </md-toolbar>

        <md-list>
          <md-list-item to="/home" @click="showNavigation = false">
            <md-icon>home</md-icon>
            <span class="md-list-item-text">Home</span>
          </md-list-item>

          <md-list-item to="/digimonlist" @click="showNavigation = false">
            <md-icon>style</md-icon>
            <span class="md-list-item-text">Digimon</span>
          </md-list-item>

          <md-list-item to="/film" @click="showNavigation = false">
            <md-icon>movie</md-icon>
            <span class="md-list-item-text">Film</span>
          </md-list-item>

          <md-list-item to="/videogames" @click="showNavigation = false">
            <md-icon>videogame_asset</md-icon>
            <span class="md-list-item-text">Videogiochi</span>
          </md-list-item>
        </md-list>
        <br />
      </md-app-drawer>
      <md-app-content>
        <router-view> </router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    showNavigation: false,
  }),
};
</script>

<style lang="scss" scoped>
.md-app {
  height: 100vh; //prende tutta la pagina
  border: 1px solid rgba(#000, 0.12);
}

/* Demo purposes only*/
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>
