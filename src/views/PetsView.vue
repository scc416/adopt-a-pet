<template>
  <div class="pets-list">
    <PetCard v-for="pet in petList" :key="pet.id" :pet="pet" />
  </div>
  <div class="load-more" v-if="!isEndOfPage" @click="loadMore">
    Load more<DownIcon />
  </div>
</template>

<script>
import PetCard from "../components/PetCard.vue";
import DownIcon from "vue-material-design-icons/MenuDown.vue";

export default {
  props: ["petList", "loadMore", "isEndOfPage", "loading"],
  components: { PetCard, DownIcon },
};
</script>

<style>
.pets-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.load-more {
  background: #e5e4e2;
  width: 100%;
  text-align: center;
  padding: 0.2em 0.5em 0.5em;
  font-size: 1.2em;
  border-radius: 15px;
  font-weight: 600;
}

.load-more > *:first-child {
  position: relative;
  top: 0.4em;
}

.load-more .material-design-icon {
  height: 1.5em;
  width: 1.5em;
}

.load-more .material-design-icon > .material-design-icon__svg {
  height: 1.5em;
  width: 1.5em;
}
</style>