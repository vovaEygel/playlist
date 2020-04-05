<template>
<section class="video-preview flex">
  <img :src="videoUrl" alt="Thumbnail">
  <section class="video-info flex column justify-center">
    <h1 class="name">{{this.videoInfo.title}}</h1>
    <p class="description">{{videoInfo.description}}</p>
    <p class="channel">{{videoInfo.channelTitle}}</p>
  </section>
  <button @click="playVideo">Play</button>
</section>
</template>

<script>
export default {
  props: { videoInfo: Object },
  name: "video-preview",
  computed: {
    videoUrl() {
      return this.videoInfo.thumbnails.medium.url
    }
  },
  methods: {
    
  }
};
</script>

<style>
</style>