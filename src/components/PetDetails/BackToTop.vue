<template>
  <div @click="backToTop" class="back-to-top">
    <UpIcon />
  </div>
</template>

<script>
import UpIcon from "vue-material-design-icons/MenuUp.vue";

export default {
  setup() {
    const backToTop = () => window.scrollTo(0, 0);
    return { backToTop };
  },
  components: { UpIcon },
};
</script>

<style>
.back-to-top {
  background: #3aab97;
  color: #fff;
  border-radius: 50%;
  height: 3.5em;
  width: 3.5em;
  position: fixed;
  right: 2em;
  bottom: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.back-to-top > * {
  position: relative;
  bottom: 0.25em;
}

.back-to-top .material-design-icon {
  height: 3.5em;
  width: 3.5em;
}

.back-to-top .material-design-icon > .material-design-icon__svg {
  height: 3.5em;
  width: 3.5em;
}
</style>