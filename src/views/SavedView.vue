<template>
  <Spin v-if="loading" />
  <h3><HeartIcon />Liked Pets</h3>
  <div v-if="petList.length">
    <div class="pets-list">
      <PetCard
        v-for="pet in details"
        :key="pet.id"
        :pet="pet"
        :liked="true"
        @setError="setError"
        :showStatus="true"
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
import HeartIcon from "vue-material-design-icons/Heart.vue";

export default {
  emits: ["setError"],
  props: ["token"],
  components: { PetCard, Spin, HeartIcon },
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
h3 {
  color: #3aab97;
}

h3 > *:first-child {
  position: relative;
  top: 0.25em;
  right: 0.2em;
}
</style>