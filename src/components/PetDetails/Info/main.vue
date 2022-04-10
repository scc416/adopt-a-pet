<template>
  <h1><component :is="icon" />{{ details.name }}</h1>
  <div class="grid">
    <div>Status:</div>
    <div>{{ details.status }}</div>
    <div>Breed:</div>
    <div>{{ details.breed }}</div>
    <div>Gender:</div>
    <div>{{ details.gender }}</div>
    <div>Age:</div>
    <div>{{ details.age }}</div>
    <div>Size:</div>
    <div>{{ details.size }}</div>
    <div>Colour:</div>
    <div>{{ details.colour }}</div>
    <div>Coat:</div>
    <div>{{ details.coat }}</div>
    <div>Characteristics:</div>
    <div>{{ details.characteristics }}</div>
    <div>Location:</div>
    <div>{{ details.location }}</div>
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