<template>
  <h1><component :is="icon" />{{ details.name }}</h1>
  <div class="grid">
    <div v-if="details.status">Status:</div>
    <div v-if="details.status">{{ details.status }}</div>
    <div v-if="details.breed">Breed:</div>
    <div v-if="details.breed">{{ details.breed }}</div>
    <div v-if="details.gender">Gender:</div>
    <div v-if="details.gender">{{ details.gender }}</div>
    <div v-if="details.age">Age:</div>
    <div v-if="details.age">{{ details.age }}</div>
    <div v-if="details.size">Size:</div>
    <div v-if="details.size">{{ details.size }}</div>
    <div v-if="details.colour">Colour:</div>
    <div v-if="details.colour">{{ details.colour }}</div>
    <div v-if="details.coat">Coat:</div>
    <div v-if="details.coat">{{ details.coat }}</div>
    <div v-if="details.location">Location:</div>
    <div v-if="details.location">{{ details.location }}</div>
  </div>
  <div class="description">{{ details.description }}</div>
  <div class="external-link">
    <a :href="details.url" target="_blank"><LinkIcon />Profile on Petfinder</a>
  </div>
</template>

<script>
import LinkIcon from "vue-material-design-icons/Link.vue";
import { getPetIcon } from "@/helpers";
import { toRefs } from "@vue/reactivity";

export default {
  props: ["details"],
  components: { LinkIcon },
  setup(props) {
    const { details } = toRefs(props);
    const icon = getPetIcon(details.value.type);
    return { icon };
  },
};
</script>

<style>
</style>