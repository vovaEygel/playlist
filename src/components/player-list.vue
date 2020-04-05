<template>
  <section>
    <h1>list</h1>
    {{videos}}
  </section>
</template>

<script>
import videoPreview from "./video-preview";
export default {
  props: {
    videos: Array 
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