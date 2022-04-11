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
</style>