<template>
  <div class="photos">
    <ShowMedia
      :photos="photos"
      :videos="videos"
      :photoNum="photoNum"
      :mediaNum="mediaNum"
    />
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
import { getVideoURL } from "@/helpers";
import useMediaAlbum from "@/composables/useMediaAlbum";
import Thumbnail from "./thumbnail.vue";
import ShowMedia from "./ShowMedia.vue";

export default {
  props: ["photos", "videos"],
  components: { Thumbnail, ShowMedia },
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