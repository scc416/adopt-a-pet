<template>
  <Slider v-model="distance" v-bind="{ max: 500, min: 1 }"></Slider>
</template>

<script>
import Slider from "@vueform/slider";
import { ref } from "@vue/reactivity";

export default {
  components: {
    Slider,
  },
  setup() {
    const distance = ref(100);
    return { distance };
  },
};
</script>

<style src="@vueform/slider/themes/default.css"></style>