<template>
  <div
    class="like-icon"
    :class="like ? 'liked' : 'not-like'"
    @click="toggleLike"
  >
    <HeartIcon />
  </div>
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
import HeartIcon from "vue-material-design-icons/Heart.vue";
import { getPetIcon } from "@/helpers";
import { toRefs } from "@vue/reactivity";
import getLike from "@/composables/getLike";

export default {
  props: ["details"],
  components: { LinkIcon, HeartIcon },
  setup(props, { emit }) {
    const { details } = toRefs(props);
    const icon = getPetIcon(details.value.type);
    const { like, toggleLike } = getLike(true, null, details.value.id, emit);
    return { icon, like, toggleLike };
  },
};
</script>

<style>
.info .like-icon {
  position: absolute;
  right: 1em;
  top: 1em;
  border: #fd827b solid 0.1em;
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info .like-icon > * {
  position: relative;
  top: 0.19em;
  left: 0.01em;
}

.info .like-icon:hover {
  cursor: pointer;
}

.info .not-like {
  color: #fd827b;
  background: #ffffff00;
}

.info .liked,
.info .not-like:hover {
  color: #fff;
  background: #fd827b;
}
</style>