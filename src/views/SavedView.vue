<template>
  <h1>Liked Pets</h1>
  <div v-if="petList.length">{{ details }}</div>
  <div v-else>You haven't liked any pet.</div>
</template>

<script>
import getLikedPets from "@/composables/getLikedPets";
import getPetDetailsWithIds from "@/composables/getPetDetailsWithIds";
import { toRefs } from "@vue/reactivity";

export default {
  emits: ["setError"],
  props: ["token"],
  setup(props, { emit }) {
    const { token } = toRefs(props);
    const petList = getLikedPets(emit);
    const details = getPetDetailsWithIds(petList, token, emit);
    return { petList, details };
  },
};
</script>

<style>
</style>