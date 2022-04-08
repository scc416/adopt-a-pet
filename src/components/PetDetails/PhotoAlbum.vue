<template>
  <div class="photos">
    <img class="main-img" :src="photos[imageNum].full" alt="" />
    <div class="thumbnails">
      <div v-for="(photo, i) in photos" :key="i" @click="updateImage(i)">
        <div class="image-screen" v-if="i !== imageNum"></div>
        <img :src="photo.small" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { toRefs } from "@vue/reactivity";
import getPhotos from "@/composables/getPhotos";

export default {
  props: ["photos"],
  setup(props) {
    const { photos } = toRefs(props);
    const { updateImage, imageNum } = getPhotos(photos);
    return { photos, updateImage, imageNum };
  },
};
</script>

<style>
.photos {
  width: 37%;
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

.image-screen:hover {
  cursor: pointer;
}
</style>