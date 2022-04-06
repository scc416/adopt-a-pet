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
  height: 5em;
  width: 5em;
  position: fixed;
  right: 2em;
  bottom: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>