<template>
  <div>{{ petList }}</div>
</template>

<script>
import getLikedPets from "@/composables/getLikedPets";
import { watch } from "@vue/runtime-core";

export default {
  setup(props, { emit }) {
    const petList = getLikedPets(emit);
    return { petList };
  },
};
</script>

<style>
</style>