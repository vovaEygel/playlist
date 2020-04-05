<template>
  <div class="home">
    <search-bar @search-videos="getVideosList"></search-bar>
    <player-list :videos="videoList"></player-list>
    <player-window></player-window>
  </div>
</template>

<script>
import playerList from "../components/player-list";
import playerWindow from "../components/player-window";
import searchBar from "../components/search-bar";

export default {
  name: "palyer-app",
  components: {
    playerList,
    playerWindow,
    searchBar
  },
  computed: {
    videoList() {
      return this.$store.getters.getList;
    }
  },
  methods: {
    async getVideosList(userSearch) {
      this.$store.dispatch({ type: "getVideos", userSearch });
    }
  }
};
</script>