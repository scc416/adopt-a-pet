<template>
  <div class="drag-bar">
    <label class="typo__label">Distance (miles)</label>
    <Slider v-model="distance" v-bind="dragBarSettings"></Slider>
  </div>
</template>

<script>
import Slider from "@vueform/slider";
import { ref } from "@vue/reactivity";
import { dragBarSettings, defaultDistance } from "@/constants";
import { watch } from "@vue/runtime-core";

export default {
  emits: ["distanceChange"],
  components: { Slider },
  setup(props, { emit }) {
    const distance = ref(defaultDistance);
    watch(distance, () => emit("distanceChange", distance.value));
    return { distance, dragBarSettings };
  },
};
</script>

<style src="@vueform/slider/themes/default.css">
</style>