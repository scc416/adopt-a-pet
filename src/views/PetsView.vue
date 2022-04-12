<template>
  <Spin v-if="loading" />
  <Control
    :showFilter="showFilter"
    :showSort="showSort"
    :toggleFilter="toggleFilter"
    :toggleSort="toggleSort"
  />
  <Filter
    v-if="showFilter"
    :token="token"
    @setError="setError"
    @submitFilter="updatePetList"
  />
  <Sort v-if="showSort" @submitSort="updatePetList" />
  <div class="pets-list">
    <PetCard
      v-for="pet in petList"
      :key="pet.id"
      :pet="pet"
      :liked="likedPetList.includes(pet.id)"
      @setError="setError"
    />
  </div>
  <ShowMoreButton
    v-if="!isEndOfPage && (petList.length || !loading)"
    :loadMore="loadMore"
  />
  <h4 v-else-if="!petList.length && !loading">
    No results found. Try different names or remove search filters.
  </h4>
  <h4 v-else-if="isEndOfPage">You have reached the end of the list</h4>
  <BackToTopButton />
</template>

<script>
import PetCard from "../components/PetList/PetCard.vue";
import Spin from "../components/Spin.vue";
import ShowMoreButton from "../components/PetList/ShowMore.vue";
import BackToTopButton from "../components/PetList/BackToTop.vue";
import getPetList from "@/composables/getPetList";
import Filter from "@/components/PetList/Filter/";
import { toRefs } from "@vue/reactivity";
import getLikedPets from "@/composables/getLikedPets";
import useControl from "@/composables/useControl";
import Control from "@/components/PetList/Control.vue";
import Sort from "@/components/PetList/Sort.vue";

export default {
  emits: ["setError"],
  props: ["token"],
  components: {
    PetCard,
    Spin,
    ShowMoreButton,
    BackToTopButton,
    Filter,
    Control,
    Sort,
  },
  setup(props, { emit }) {
    const { token } = toRefs(props);
    const { petList, updatePetList, loading, loadMore, isEndOfPage } =
      getPetList(token, emit);
    const setError = (e) => emit("setError", e);
    const likedPetList = getLikedPets();
    const { showFilter, showSort, toggleFilter, toggleSort } = useControl();
    return {
      petList,
      updatePetList,
      loading,
      loadMore,
      isEndOfPage,
      setError,
      showFilter,
      toggleFilter,
      showSort,
      toggleSort,
      likedPetList,
    };
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