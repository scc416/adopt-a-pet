<template>
  <div class="drag-bar">
    <label class="typo__label">Distance</label>
    <Slider v-model="distance" v-bind="dragBarSettings"></Slider>
  </div>
</template>

<script>
import Slider from "@vueform/slider";
import { ref } from "@vue/reactivity";
import { dragBarSettings, defaultDistance } from "@/constants";

export default {
  components: { Slider },
  setup() {
    const distance = ref(defaultDistance);
    return { distance, dragBarSettings };
  },
};
</script>

<style src="@vueform/slider/themes/default.css">
</style>