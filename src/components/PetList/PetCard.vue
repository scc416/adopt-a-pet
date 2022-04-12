<template>
  <router-link
    target="_blank"
    :to="{ name: 'petDetails', params: { id } }"
    class="pet-card"
  >
    <div
      @click.prevent="toggleLike()"
      class="like-icon"
      :class="like ? 'liked' : 'not-like'"
    >
      <HeartIcon />
    </div>
    <div class="content">
      <div class="name"><component :is="icon" /> {{ name }}</div>
      <div class="details">
        <div>{{ gender }} &bull; {{ age }} &bull; {{ breed }}</div>
        <div><LocationIcon />{{ shortAddress }}</div>
      </div>
    </div>
    <img :src="photo" />
  </router-link>
</template>

<script>
import { getPetIcon, getBreed, getShortAddress } from "@/helpers";
import LocationIcon from "vue-material-design-icons/MapMarker.vue";
import HeartIcon from "vue-material-design-icons/Heart.vue";
import getLike from "@/composables/getLike";

export default {
  props: ["pet", "liked"],
  emits: ["setError"],
  components: { HeartIcon, LocationIcon },
  setup(props, { emit }) {
    const { pet, liked } = props;
    const { id, name, photos, gender, breeds, age, contact, type } = pet;
    const icon = getPetIcon(type);
    const { address } = contact;
    const shortAddress = getShortAddress(address);
    const breed = getBreed(breeds);
    const { like, toggleLike } = getLike(false, liked, id, emit);
    return {
      id,
      name,
      photo: photos[0].full,
      gender,
      breed,
      age,
      shortAddress,
      icon,
      like,
      toggleLike,
    };
  },
};
</script>

<style>
.pet-card {
  height: 15em;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5em;
  position: relative;
  color: #fff;
  text-decoration: none;
  border-radius: 10px;
}

.pet-card .details > div:nth-child(2) > *:first-child {
  color: #ff506d;
  position: relative;
  top: 0.2em;
  right: 0.08em;
}

.pet-card .details .material-design-icon {
  height: 1.2em;
  width: 1.2em;
}

.pet-card .details .material-design-icon > .material-design-icon__svg {
  height: 1.2em;
  width: 1.2em;
}

.pet-card .name {
  font-weight: 700;
}

.pet-card .name > *:first-child {
  height: 1.4em;
  width: 1.4em;
  position: relative;
  top: 0.3em;
  color: #3aab97;
}

.pet-card .details {
  font-size: 0.7em;
}

.pet-card img {
  width: 100%;
  height: 100%;
}

.pet-card .content {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2em 0.7em 0.7em;
  width: 100%;
  background: linear-gradient(#00000000, #000000);
}

.pet-card .like-icon {
  position: absolute;
  right: 0.4em;
  top: 0.4em;
}

.pet-card .like-icon > * {
  position: relative;
  top: 0.1em;
}

.pet-card .liked,
.pet-card .not-like:hover {
  color: #fd827b;
}
</style>