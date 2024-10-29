<template>
  <div>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <div class="md-headline" id="titolo-1"><b>FILM</b></div>
    <br />
    <div class="md-layout" style="display: flex; justify-content: center">
      <div
        class="md-layout-item md-xlarge-size-33 md-large-size-33 md-medium-size-33 md-small-size-50 md-xsmall-size-100"
        v-for="film in films"
        :key="film.id"
      >
        <v-card>
          <md-card-area>
            <md-card-media>
              <img :src="film.img" />
            </md-card-media>

            <md-card-header id="film_header">
              <div class="md-title">{{ film.title }}</div>
              <div class="md-subhead">
                <b>Casa di produzione: </b>{{ film.producer }}
              </div>
            </md-card-header>
          </md-card-area>

          <md-card-expand id="expand_film">
            <md-card-actions id="actions_film" md-alignment="space-between">
              <md-card-expand-trigger>
                <md-button class="md-icon-button">
                  <md-icon>keyboard_arrow_down</md-icon>
                </md-button>
              </md-card-expand-trigger>
            </md-card-actions>

            <md-card-expand-content>
              <md-card-content class="md-body-1">
                <b>Data di rilascio:</b> {{ film.release_date }} <br />
                <b>Regista:</b> {{ film.director }} <br />
                <b>Trama:</b> {{ film.opening_crawl }} <br />
              </md-card-content>
            </md-card-expand-content>
          </md-card-expand>
        </v-card>
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
      films: DataService.getFilms(),
    };
  },
};
</script>

<style lang="scss" scoped>
#titolo-1 {
  margin-left: 15px;
  margin-top: 10px;
}

#expand_film {
  background-color: rgb(112, 108, 108);
}
#actions_film {
  background-color: rgb(112, 108, 108);
  height: 40px;
}

.md-card.md-theme-default {
  background: rgb(112, 108, 108);
}
</style>