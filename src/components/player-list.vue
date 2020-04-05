<template>
  <section class="player-list">
    <h1>Results</h1>
    <video-preview v-for="video in videos" :key="video.id.videoId" :videoInfo="video.snippet"></video-preview>
  </section>
</template>

<script>
import videoPreview from "./video-preview";
export default {
  props: {
    videos: Array
  },
  name: "player-list",
  components: {
    videoPreview
  }
};
</script>

<style>
</style>