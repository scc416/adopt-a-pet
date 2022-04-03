<template>
  <div v-for="pet in petList" :key="pet.id">
    <div>{{ pet.id }}</div>
    <div>{{ pet.name }}</div>
    <img :src="pet.photos[0].medium" />
  </div>
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
