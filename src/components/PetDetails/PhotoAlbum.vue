<template>
  <div class="photos">
    <img :src="imageUrl" alt="" />
    <div class="thumbnails">
      <img
        v-for="(photo, i) in photos"
        :key="i"
        :src="photo.full"
        alt=""
        @click="updateImage(i)"
      />
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
    const { updateImage, imageUrl } = getPhotos(photos);
    return { photos, updateImage, imageUrl };
  },
};
</script>

<style>
.photos {
  border-radius: 1em;
  width: 37%;
}

.photos img {
  width: 100%;
  border-radius: 1em;
  overflow: hidden;
}

.thumbnails {
  display: flex;
  flex-wrap: wrap;
}

.thumbnails img {
  width: 18%;
  margin: 1% 1%;
  border-radius: 0.5em;
}

.thumbnails img:hover {
  cursor: pointer;
}
</style>