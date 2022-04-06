<template>
  <div @click="backToTop">TO THE TOP</div>
</template>

<script>
export default {
  setup() {
    const backToTop = () => window.scrollTo(0, 0);
    return { backToTop };
  },
};
</script>

<style>
</style>