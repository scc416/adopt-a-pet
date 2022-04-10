<template>
  <div class="info">
    <h1><component :is="icon" />{{ name }}</h1>
    <div class="grid">
      <div>Breed:</div>
      <div>{{ name }}</div>
      <div>Gender:</div>
      <div>{{ gender }}</div>
      <div>Age:</div>
      <div>{{ age }}</div>
      <div>Colour:</div>
      <div>{{ colour }}</div>
      <div>Size:</div>
      <div>{{ size }}</div>
    </div>
    <div class="description">{{ description }}</div>
    <div class="external-link">
      <a :href="url" target="_blank"> <LinkIcon />Original link </a>
    </div>
    <hr />
  </div>
</template>

<script>
import { toRefs } from "@vue/reactivity";
import { getPetIcon, getFormattedInfo } from "@/helpers";
import LinkIcon from "vue-material-design-icons/Link.vue";

export default {
  props: ["details"],
  components: { LinkIcon },
  setup(props) {
    const { details } = toRefs(props);
    const icon = getPetIcon(details.value.type);
    const formattedDetails = getFormattedInfo(details);
    return { ...formattedDetails, icon };
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

.description {
  line-height: 2;
}

.info > hr {
  border: #e9e9e9 solid 1px;
}

.info h1 {
  color: #3aab97;
}

.info > div {
  margin: 1.2em 0;
}

.info > div.external-link {
  margin: 2em 0;
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

.info > div.external-link > a {
  background: #3aab97;
  border-radius: 5em;
  font-weight: 600;
  border: #3aab97 solid 0.1em;
  padding: 0.4em 0.9em;
  text-decoration: none;
  color: #fff;
  font-size: 0.85em;
}

.info > div.external-link > a:hover {
  background: #fff;
  color: #3aab97;
}

.info > div.external-link > a > *:first-child {
  position: relative;
  top: 0.25em;
  margin-right: 0.3em;
}

.info > div.external-link > a .material-design-icon {
  height: 1.2em;
  width: 1.2em;
}
.info
  > div.external-link
  > a
  .material-design-icon
  > .material-design-icon__svg {
  height: 1.2em;
  width: 1.2em;
}
</style>