<template>
  <h1>PETS VIEW</h1>
  <button @click="pageNum++">Next page</button>
  <div v-for="pet in petList.animals" :key="pet.id">
    <div>{{ pet.id }}</div>
    <div>{{ pet.name }}</div>
    <div>{{ pet.photos }}</div>
    <img v-if="pet.photos.length" :src="pet.photos[0].small" />
  </div>
</template>

<script>
import getToken from "../composables/getToken";
import getPetList from "../composables/getPetList";
import { ref } from "@vue/reactivity";
import { watch } from '@vue/runtime-core';

export default {
  setup() {
    const { token, error } = getToken();
    const { petList, updatePetList, loading } = getPetList(token);
    const pageNum = ref(1);
    watch(pageNum, () => updatePetList(pageNum))
    return { token, error, petList, pageNum };
  },
};
</script>
