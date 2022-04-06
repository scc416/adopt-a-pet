<template>
  <Spin v-if="loading" />
  <div class="pets-list">
    <PetCard v-for="pet in petList" :key="pet.id" :pet="pet" />
  </div>
  <ShowMoreButton v-if="!isEndOfPage && petList.length" :loadMore="loadMore" />
  <div @click="moveUp">TO THE TOP</div>
</template>

<script>
import PetCard from "../components/PetDetails/PetCard.vue";
import Spin from "../components/Spin.vue";
import ShowMoreButton from "../components/PetDetails/ShowMore.vue";

export default {
  props: ["petList", "loadMore", "isEndOfPage", "loading"],
  components: { PetCard, Spin, ShowMoreButton },
  setup() {
    const moveUp = () => {
      window.scrollTo(0, 0);
      console.log("CLICK");
    };
    return { moveUp };
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