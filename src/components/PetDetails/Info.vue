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
    <a :href="details.url" target="_blank">
      <div>original link</div>
    </a>
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

.info h1 {
  color: #3aab97;
}

.info > div {
  margin: 0.8em 0;
}

.info h1 .material-design-icon {
  height: 1.2em;
  width: 1.2em;
}

.info h1 .material-design-icon > .material-design-icon__svg {
  height: 1.2em;
  width: 1.2em;
}

.info h1 > *:first-child {
  position: relative;
  top: 0.25em;
  margin-right: 0.15em;
}

.grid {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-row-gap: 0.5em;
  grid-column-gap: 1.3em;
}

.grid > div:nth-child(even) {
  font-weight: 600;
}
</style>