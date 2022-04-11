<template>
  <div class="photos">
    <img
      v-if="mediaNum < photoNum"
      class="main-img"
      :src="photos[mediaNum].large"
      alt=""
    />
    <div v-else class="video">
      <iframe
        width="448"
        height="252"
        frameborder="0"
        webkitAllowFullScreen
        mozallowfullscreen
        allowFullScreen
        :src="videos[mediaNum - photoNum].vid"
      ></iframe>
    </div>
    <Thumbnail
      :photos="photos"
      :videos="videos"
      :updateMedia="updateMedia"
      :photoNum="photoNum"
      :mediaNum="mediaNum"
    />
  </div>
</template>

<script>
import { toRefs } from "@vue/reactivity";
import useMediaAlbum from "@/composables/useMediaAlbum";
import PlayIcon from "vue-material-design-icons/PlayCircle.vue";
import { getVideoURL } from "@/helpers";
import Thumbnail from "./thumbnail.vue";

export default {
  props: ["photos", "videos"],
  components: { PlayIcon, Thumbnail },
  setup(props) {
    const { photos, videos } = toRefs(props);
    const { updateMedia, mediaNum } = useMediaAlbum();
    const newVideo = getVideoURL(videos);
    const photoNum = photos.value.length;
    return { photos, updateMedia, photoNum, videos: newVideo, mediaNum };
  },
};
</script>

<style>
.photos {
  width: 37%;
}

.video {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  border-radius: 1em;
  overflow: hidden;
}

.video iframe,
.video video {
  position: absolute;
  width: 100%;
  height: 100%;
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-screen:hover {
  cursor: pointer;
}
</style>