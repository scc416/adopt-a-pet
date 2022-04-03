<template>
  <PetCard v-for="pet in petList" :key="pet.id" :pet="pet" />
</template>

<script>
import getToken from "../composables/getToken";
import getPetList from "../composables/getPetList";
import PetCard from "../components/PetCard.vue";

export default {
  setup() {
    const { token, error } = getToken();
    const { petList, updatePetList, loading } = getPetList(token);
    return { token, error, petList };
  },
  components: { PetCard },
};
</script>
