<template>
  <div class="md-layout" style="justify-content: center">
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <md-autocomplete
      style="background-color: grey"
      md-layout="box"
      v-model="selectedDigimon"
      :md-options="options"
      @md-changed="search"
      @md-selected="select"
    >
      <label>Cerca...</label>
    </md-autocomplete>
    <div v-for="digimon in digimons" :key="digimon.cardnumber">
      <md-card id="list">
        <md-card-area>
          <md-card-media>
            <img
              :src="`https://images.digimoncard.io/images/cards/${digimon.id}.jpg`"
              style="height: 340px"
              alt="Digimon Card"
            />
          </md-card-media>

          <md-card-header id="list_header">
            <div class="md-title-2">{{ digimon.name }}</div>
            <div v-if="digimon.stage" class="md-subhead-2">
              <b>Livello:</b> {{ digimon.stage }}
            </div>
          </md-card-header>
        </md-card-area>
        <md-card-actions id="list_actions">
          <md-button
            id="similiBtn"
            class="md-raised"
            :to="'/digimonlist/' + digimon.name"
          >
            Vedi simili
          </md-button>
        </md-card-actions>
      </md-card>
      <br />
    </div>
    <br />
    <div style="display: flex; justify-content: center; width: 100%">
      <md-button
        id="loadMoreBtn"
        class="md-primary md-raised"
        @click="loadMore()"
        >Load More</md-button
      ><md-progress-spinner
        md-mode="indeterminate"
        v-if="loading"
      ></md-progress-spinner>
    </div>
  </div>
</template>

<script>
import DataService from "../database";

export default {
  props: {
    digimonname: String,
  },
  data() {
    return {
      digimons: [],
      limit: 16,
      loading: false,
      selectedDigimon: null,
      options: [],
    };
  },

  methods: {
    load() {
      DataService.getDigimons(this.limit).then((data) => {
        this.digimons = data.data;
      });
    },

    loadMore() {
      this.limit += 16;
      this.loading = true;

      DataService.getDigimons(this.limit).then((data) => {
        const newDigimons = data.data.slice(this.digimons.length, this.limit);
        this.digimons = this.digimons.concat(newDigimons);
        this.loading = false;
      });
    },

    search(term) {
      if (!term || term.length < 3) {
        this.options = [];
        return;
      }

      DataService.searchDigimon(term).then((results) => {
        this.options = results;
      }).catch(error => {
        console.error('Search error:', error);
      });
    },

    select(selected) {
      this.$router.push({ path: "/digimonlist/" + selected });
    },
  },

  created() {
    this.load();
  },
};
</script>

<style lang="scss" scoped>
#list {
  width: 240px;
  height: 470px;
}

#list_header {
  background: rgb(112, 108, 108);
  height: 85px;
  margin-top: -10px;
}

#list_actions {
  height: 23px;
  margin-bottom: 22px;
  margin-top: 15px;
}

.md-title-2 {
  font-size: 20px;
  font-weight: bold;
}

.md-subhead-2 {
  margin-top: 5px;
  font-size: 15px;
}

.md-card.md-theme-default {
  background: rgb(112, 108, 108);
}

#similiBtn {
  margin-right: 135px;
  height: 35px;
}
</style>
