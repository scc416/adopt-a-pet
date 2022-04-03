<template>
  <div class="pets-list">
    <PetCard v-for="pet in petList" :key="pet.id" :pet="pet" />
  </div>
  <button v-if="!isEndOfPage" @click="loadMore">Load more</button>
</template>

<script>
import PetCard from "../components/PetCard.vue";

export default {
  props: ["petList", "loadMore", "isEndOfPage"],
  components: { PetCard },
};
</script>

<style>
.pets-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>