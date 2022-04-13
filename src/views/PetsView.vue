<template>
  <Spin v-if="loading" />
  <div class="header">
    <div class="control-left">
      <Sort v-if="showSort" @submitSort="updatePetList" />
      <span
        v-if="showFilter"
        class="distance"
        :class="{ show: location }"
        @click="toggleLocation()"
      >
        <DistanceIcon />
      </span>
    </div>
    <Control
      :showFilter="showFilter"
      :showSort="showSort"
      :toggleFilter="toggleFilter"
      :toggleSort="toggleSort"
    />
  </div>
  <Filter
    :location="location"
    v-if="showFilter"
    :token="token"
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
import useControl from "@/composables/useControl";
import Control from "@/components/PetList/Control.vue";
import Sort from "@/components/PetList/Sort.vue";
import DistanceIcon from "vue-material-design-icons/CrosshairsGps.vue";

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
    DistanceIcon,
  },
  setup(props, { emit }) {
    const { token } = toRefs(props);
    const { petList, updatePetList, loading, loadMore, isEndOfPage } =
      getPetList(token, emit);
    const setError = (e) => emit("setError", e);
    const likedPetList = getLikedPets();
    const {
      showFilter,
      showSort,
      toggleFilter,
      toggleSort,
      toggleLocation,
      location,
    } = useControl(emit);
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
      toggleLocation,
      location,
    };
  },
};
</script>

<style>
.distance {
  padding: 0.2em;
  border: #3aab97 solid 0.08em;
  color: #fff;
  background: #3aab97;
  padding: 0.25em 0.4em 0.1em;
  border-radius: 0.1em;
}

.distance .material-design-icon {
  height: 0.9em;
  width: 0.9em;
}

.distance .material-design-icon > .material-design-icon__svg {
  height: 0.9em;
  width: 0.9em;
}

.control-left {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5em;
  align-items: flex-start;
}

.header {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}

.pets-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>