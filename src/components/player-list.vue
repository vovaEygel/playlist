<template>
  <section>
    <h1>list</h1>
    <video-preview v-for="(idx, video) in videos" :key="idx" :video="video"></video-preview>
  </section>
</template>

<script>
import videoPreview from "./video-preview";
export default {
  props: {
    videos: { Array }
  },
  data() {
    return {
      testVids: [{ name: "x" }, { name: "y" }]
    };
  },
  name: "player-list",
  components: {
    videoPreview
  }
};
</script>

<style>
</style>