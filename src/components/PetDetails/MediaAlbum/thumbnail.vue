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
.thumbnails {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.thumbnails > div {
  width: calc(25% - 0.6em);
  margin: 0.3em 0.3em;
  overflow: hidden;
  position: relative;
  border-radius: 0.3em;
  height: 6em;
}

.thumbnails img:hover {
  cursor: pointer;
}

.thumbnails img {
  min-height: 100%;
  min-width: 100%;
}

.image-screen {
  background: #7d7d7daa;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-screen:hover {
  cursor: pointer;
}

.image-screen:hover {
  cursor: pointer;
}
</style>