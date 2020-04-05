<template>
  <div class="player-app">
    <search-bar></search-bar>
    <div class="player flex row">
      <player-list></player-list>
      <player-window></player-window>
    </div>
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