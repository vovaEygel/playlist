<template>
  <div class="home">
    <search-bar></search-bar>
    <player-list></player-list>
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
  }
};
</script>