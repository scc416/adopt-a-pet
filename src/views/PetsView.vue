<template>
  <Spin v-if="loading" />
  <Filter
    :token="token"
    :updatePetList="updatePetList"
    @setError="setError"
    @submitFilter="updatePetList"
  />
  <div class="pets-list">
    <PetCard v-for="pet in petList" :key="pet.id" :pet="pet" />
  </div>
  <ShowMoreButton
    v-if="!isEndOfPage && (petList.length || !loading)"
    :loadMore="loadMore"
  />
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

export default {
  emits: ["setError"],
  props: ["token"],
  components: { PetCard, Spin, ShowMoreButton, BackToTopButton, Filter },
  setup(props, { emit }) {
    const { token, setError } = toRefs(props);
    const { petList, updatePetList, loading, loadMore, isEndOfPage } =
      getPetList(token, emit);
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