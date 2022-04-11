<template>
  <div class="thumbnails">
    <div v-for="(photo, i) in photos" :key="i" @click="updateMedia(i)">
      <div class="image-screen" v-if="i !== mediaNum"></div>
      <img :src="photo.small" alt="" />
    </div>
    <div
      v-for="(video, i) in videos"
      :key="i"
      @click="updateMedia(i + photoNum)"
    >
      <div class="video-screen"><PlayIcon /></div>
      <div class="image-screen" v-if="i + photos.length !== mediaNum"></div>
      <img :src="video.img" />
    </div>
  </div>
</template>

<script>
import PlayIcon from "vue-material-design-icons/PlayCircle.vue";

export default {
  components: { PlayIcon },
  props: ["photos", "videos", "updateMedia", "photoNum", "mediaNum"],
};
</script>

<style>
</style>