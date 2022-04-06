<template>
  <Spin v-if="loading" />
  <div class="pets-list">
    <PetCard v-for="pet in petList" :key="pet.id" :pet="pet" />
  </div>
  <ShowMoreButton v-if="!isEndOfPage && petList.length" :loadMore="loadMore" />
  <BackToTopButton />
</template>

<script>
import PetCard from "../components/PetDetails/PetCard.vue";
import Spin from "../components/Spin.vue";
import ShowMoreButton from "../components/PetDetails/ShowMore.vue";
import BackToTopButton from "../components/PetDetails/BackToTop.vue";

export default {
  props: ["petList", "loadMore", "isEndOfPage", "loading"],
  components: { PetCard, Spin, ShowMoreButton, BackToTopButton },
};
</script>

<style>
.pets-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>