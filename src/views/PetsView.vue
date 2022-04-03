<template>
  <div class="pets-list">
    <PetCard v-for="pet in petList" :key="pet.id" :pet="pet" />
  </div>
</template>

<script>
import getToken from "../composables/getToken";
import getPetList from "../composables/getPetList";
import PetCard from "../components/PetCard.vue";
import { watch } from "@vue/runtime-core";

export default {
  setup() {
    const { token, error } = getToken();
    const { petList, updatePetList, loading } = getPetList(token);
    watch(petList, () => console.log(petList.value));
    return { token, error, petList };
  },
  components: { PetCard },
};
</script>

<style>
.pets-list {
  display: flex;
  flex-wrap: wrap;
}
</style>