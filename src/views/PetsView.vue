<template>
  <Spin v-if="loading" />
  <div class="control">
    <span @click="toggleFilter()" :class="{ show: showFilter }"
      >{{ showFilter ? "Hide" : "Show" }} Filter</span
    >
    <span @click="toggleSort()" :class="{ show: showSort }"
      >{{ showSort ? "Hide" : "Show" }} Sorting</span
    >
  </div>
  <Filter
    v-if="showFilter"
    :token="token"
    :updatePetList="updatePetList"
    @setError="setError"
    @submitFilter="updatePetList"
  />
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
import useShow from "@/composables/useShow";

export default {
  emits: ["setError"],
  props: ["token"],
  components: { PetCard, Spin, ShowMoreButton, BackToTopButton, Filter },
  setup(props, { emit }) {
    const { token } = toRefs(props);
    const { petList, updatePetList, loading, loadMore, isEndOfPage } =
      getPetList(token, emit);
    const setError = (e) => emit("setError", e);
    const likedPetList = getLikedPets();
    const { show: showFilter, toggleShow: toggleFilter } = useShow();
    const { show: showSort, toggleShow: toggleSort } = useShow();
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
.control {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 0.4em;
}

.control span {
  margin-left: 1em;
  padding: 0.5em 0.8em;
  border-radius: 0.2em;
  font-weight: 700;
  font-size: 0.8em;
  border: #3aab97 solid 0.1em;
}

.control span:hover {
  cursor: pointer;
}

.control span {
  color: #fff;
  background: #3aab97;
}

.control span.show {
  background: #ffffff00;
  color: #3aab97;
}

.pets-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>