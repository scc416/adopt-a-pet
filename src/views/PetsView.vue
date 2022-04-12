<template>
  <Spin v-if="loading" />
  <div class="control"><span>Show Filter</span><span>Show Sorting</span></div>
  <Filter
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
    return {
      petList,
      updatePetList,
      loading,
      loadMore,
      isEndOfPage,
      setError,
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
}

.control span {
  background: #3aab97;
  margin-left: 1em;
  padding: 0.8em;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.8em;
  color: #fff;
  border: #3aab97 solid 0.1em;
}

.control span:hover {
  background: #ffffff00;
  color: #3aab97;
  cursor: pointer;
}

.pets-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>