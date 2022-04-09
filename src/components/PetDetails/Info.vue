<template>
  <div class="info">
    <h1><component :is="icon" />{{ details.name }}</h1>
    <div class="grid">
      <div>Breed:</div>
      <div>{{ details.name }}</div>
      <div>Gender:</div>
      <div>{{ details.gender }}</div>
      <div>Age:</div>
      <div>{{ details.age }}</div>
      <div>Colour:</div>
      <div>{{ details.colors.primary }}</div>
      <div>Size:</div>
      <div>{{ details.size }}</div>
    </div>
    <div>{{ details.description }}</div>
    <a :href="details.url" target="_blank">original link</a>
  </div>
</template>

<script>
import { toRefs } from "@vue/reactivity";
import { getPetIcon } from "@/helpers";

export default {
  props: ["details"],
  setup(props) {
    const { details } = toRefs(props);
    const icon = getPetIcon(details.value.type);
    return { details, icon };
  },
};
</script>

<style>
.info {
  background: #f9f9f9;
  padding: 3em 4em;
  border-radius: 1em;
  width: 60%;
}

.grid {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0.5em;
}

.info h1 {
  color: #3aab97;
}
</style>