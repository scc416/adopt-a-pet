<template>
  <div class="photos">
    <img :src="photos[0].full" alt="" />
  </div>
</template>

<script>
import { toRefs } from "@vue/reactivity";

export default {
  props: ["photos"],
  setup(props) {
    const { photos } = toRefs(props);
    return { photos };
  },
};
</script>

<style>
.photos {
  border-radius: 1em;
  width: 45%;
}

.photos img {
  width: 100%;
  border-radius: 1em;
  overflow: hidden;
}
</style>