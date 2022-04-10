<template>
  <div class="photos">
    <img
      v-if="imageNum < photos.length"
      class="main-img"
      :src="photos[imageNum].large"
      alt=""
    />
    <div
      class="video"
      v-else
      v-html="videos[imageNum - photos.length].embed"
    ></div>
    <div class="thumbnails">
      <div v-for="(photo, i) in photos" :key="i" @click="updateImage(i)">
        <div class="image-screen" v-if="i !== imageNum"></div>
        <img :src="photo.small" alt="" />
      </div>
      <div
        v-for="(video, i) in videos"
        :key="i"
        @click="updateImage(i + photos.length)"
      >
        <div class="image-screen" v-if="i + photos.length !== imageNum"></div>
        <div class="video-screen"></div>
        <div class="video" v-html="video.embed"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { toRefs } from "@vue/reactivity";
import getPhotoAlbum from "@/composables/getPhotoAlbum";

export default {
  props: ["photos", "videos"],
  setup(props) {
    const { photos, videos } = toRefs(props);
    const { updateImage, imageNum } = getPhotoAlbum();
    return { photos, updateImage, imageNum, videos };
  },
};
</script>

<style>
.photos {
  width: 37%;
}

.video > iframe {
  width: 100%;
}

.photos .main-img {
  width: 100%;
  border-radius: 1em;
}

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
}

.image-screen:hover {
  cursor: pointer;
}
</style>