<template>
  <h1>Liked Pets</h1>
  <div v-if="petList.length">{{ petList }}</div>
  <div v-else>You haven't liked any pet.</div>
</template>

<script>
import getLikedPets from "@/composables/getLikedPets";

export default {
  emits: ["setError"],
  setup(props, { emit }) {
    const petList = getLikedPets(emit);
    return { petList };
  },
};
</script>

<style>
</style>