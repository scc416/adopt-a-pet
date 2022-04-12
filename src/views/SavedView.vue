<template>
  <Spin v-if="loading" />
  <h1>Liked Pets</h1>
  <div v-if="petList.length">
    <div class="pets-list">
      <PetCard
        v-for="pet in details"
        :key="pet.id"
        :pet="pet"
        :liked="true"
        @setError="setError"
      />
    </div>
  </div>
  <div v-else>You haven't liked any pet.</div>
</template>

<script>
import getLikedPets from "@/composables/getLikedPets";
import getPetDetailsWithIds from "@/composables/getPetDetailsWithIds";
import { toRefs } from "@vue/reactivity";
import PetCard from "@/components/PetList/PetCard.vue";
import Spin from "@/components/Spin.vue";

export default {
  emits: ["setError"],
  props: ["token"],
  components: { PetCard, Spin },
  setup(props, { emit }) {
    const { token } = toRefs(props);
    const petList = getLikedPets(emit);
    const { details, loading } = getPetDetailsWithIds(petList, token, emit);
    const setError = (e) => emit("setError", e);
    return { petList, details, loading, setError };
  },
};
</script>

<style>
</style>