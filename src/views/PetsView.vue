<template>
  <Spin v-if="loading" />
  <div class="pets-list">
    <PetCard v-for="pet in petList" :key="pet.id" :pet="pet" />
  </div>
  <ShowMoreButton v-if="!isEndOfPage && petList.length" :loadMore="loadMore" />
  <BackToTopButton />
</template>

<script>
import PetCard from "../components/PetList/PetCard.vue";
import Spin from "../components/Spin.vue";
import ShowMoreButton from "../components/PetList/ShowMore.vue";
import BackToTopButton from "../components/PetList/BackToTop.vue";
import getPetList from "@/composables/getPetList";
import { toRefs } from "@vue/reactivity";

export default {
  props: ["token", "error"],
  components: { PetCard, Spin, ShowMoreButton, BackToTopButton },
  setup(props) {
    const { token, error } = toRefs(props);
    const { petList, updatePetList, loading, loadMore, isEndOfPage } =
      getPetList(token, error);
    return { petList, updatePetList, loading, loadMore, isEndOfPage };
  },
};
</script>

<style>
.pets-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>