<template>
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
</template>

<script>
export default { props: ["mediaNum", "photoNum", "photos", "videos"] };
</script>

<style>
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

.main-img {
  width: 100%;
  border-radius: 1em;
}
</style>