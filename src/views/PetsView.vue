<template>
  <div class="pets-list">
    <PetCard v-for="pet in petList" :key="pet.id" :pet="pet" />
  </div>
</template>

<script>
import PetCard from "../components/PetCard.vue";

export default {
  props: {
    petList: Array,
  },
  setup(props) {
    const { petList } = props;
    return { petList };
  },
  components: { PetCard },
};
</script>

<style>
.pets-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>