<template>
  <section class="search-bar">
    <input class="video-search" type="text" placeholder="Search on youtube" v-model="searchTxt" />
    <button class="search-btn" @click="search">Search</button>
  </section>
</template>

<script>
export default {
  methods: {
    data() {
      return {
        searchTxt: ""
      };
    },
    search() {
      console.log(this.searchTxt);
      // this.$store.dispatch("search");
    }
  }
};
</script>

<style>
</style>