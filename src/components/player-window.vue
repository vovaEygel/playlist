<template>
  <section class="video">
    <iframe width="420" height="315" :src="video.url"></iframe>
    <h1>Currently playing: {{this.video.name}}</h1>
  </section>
</template>
<script>
export default {
  name: "player-window",
  data() {
    return {
      video: ""
    };
  },
  created() {
    this.video = this.$store.getters.getCurrVideo;
  }
};
</script>

<style>
</style>