<template>
  <div class="md-layout" style="justify-content: center">
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <div v-for="digimon in digimons" :key="digimon.cardnumber">
      <md-card id="simili_card">
        <md-card-area>
          <md-card-media>
            <img
              :src="`https://images.digimoncard.io/images/cards/${digimon.id}.jpg`"
              style="height: 340px"
              alt="Digimon Card"
            />
          </md-card-media>
          <md-card-header id="simili_header">
            <div class="md-title-2">{{ digimon.name }}</div>
            <div v-if="digimon.stage" class="md-subhead-2">
              <b>Livello:</b> {{ digimon.stage }}
            </div>
          </md-card-header>
        </md-card-area>
      </md-card>
      <br />
    </div>
  </div>
</template>

<script>
import DataService from "../database";

export default {
  data: function () {
    return {
      digimons: null,
    };
  },

  created: function () {
    this.load();
  },

  methods: {
    load: function () {
      DataService.getDigimon(this.$route.params.name).then((data) => {
        this.digimons = data.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#simili_card {
  width: 240px;
  height: 470px;
}

#simili_header {
  background: rgb(112, 108, 108);
  height: 100px;
  margin-top: -10px;
}

.md-card.md-theme-default {
  background: rgb(112, 108, 108);
}
</style>
