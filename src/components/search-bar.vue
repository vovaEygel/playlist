<template>
  <section class="search-bar">
    <h1>search</h1>
    <input class="video-search" type="text" v-model="userSearch" />
    <button class="search-btn" @click="searchVideos">Search</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userSearch: ""
    };
  },
  methods: {
    searchVideos() {
      this.$emit("search-videos", this.userSearch);
    }
  }
};
</script>

<style>
</style>