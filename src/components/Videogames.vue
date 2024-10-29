<template>
  <div>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <div class="md-headline" id="titolo-1"><b>VIDEOGIOCHI</b></div>
    <br />
    <div class="md-layout" style="display: flex; justify-content: center">
      <div
        class="md-layout-item md-xlarge-size-33 md-large-size-33 md-medium-size-33 md-small-size-50 md-xsmall-size-100"
        v-for="videogame in videogames"
        :key="videogame.id"
      >
        <md-card>
          <md-card-area>
            <md-card-media>
              <img :src="videogame.img" />
            </md-card-media>
            <md-card-header>
              <div class="md-title">{{ videogame.title }}</div>
            </md-card-header>
          </md-card-area>
          <md-card-expand id="expand_vg">
            <md-card-actions md-alignment="space-between" id="actions_vg">
              <md-card-expand-trigger>
                <md-button class="md-icon-button">
                  <md-icon>keyboard_arrow_down</md-icon>
                </md-button>
              </md-card-expand-trigger>
            </md-card-actions>

            <md-card-expand-content>
              <md-card-content class="md-body-1">
                <b>Data di rilascio:</b> {{ videogame.data }} <br />
                <b>Console:</b> {{ videogame.console }} <br />
                <b>Genere:</b> {{ videogame.genere }} <br />
              </md-card-content>
            </md-card-expand-content>
          </md-card-expand>
        </md-card>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import DataService from "../database";

export default {
  data: function () {
    return {
      videogames: DataService.getVideogames(),
    };
  },
};
</script>

<style lang="scss" scoped>
#titolo-1 {
  margin-left: 15px;
  margin-top: 10px;
}
.md-card.md-theme-default {
  background: rgb(112, 108, 108);
}

#expand_vg {
  background-color: rgb(112, 108, 108);
}
#actions_vg {
  background-color: rgb(112, 108, 108);
  height: 40px;
}
</style>