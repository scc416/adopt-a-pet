<template>
  <router-link :to="{ name: 'petDetails', params: { id } }" class="pet-card">
    <div class="content">
      <div class="name"><component :is="icon" /> {{ name }}</div>
      <div class="details">
        <div>{{ gender }} &bull; {{ age }} &bull; {{ breed }}</div>
        <div><LocationIcon />{{ city }}, {{ country }}</div>
      </div>
    </div>
    <img :src="photo" />
  </router-link>
</template>

<script>
import { getPetIcon, getBreed } from "@/helpers";
import LocationIcon from "vue-material-design-icons/MapMarker.vue";

export default {
  props: ["pet"],
  setup(props) {
    const { pet } = props;
    const { id, name, photos, gender, breeds, age, contact, species } = pet;
    const icon = getPetIcon(species);
    const { address } = contact;
    const { country, city } = address;
    const breed = getBreed(breeds);
    return {
      id,
      name,
      photo: photos[0].full,
      gender,
      breed,
      age,
      country,
      city,
      icon,
    };
  },
  components: { LocationIcon },
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
  max-width: 100%;
  max-height: 100%;
}

.pet-card .content {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2em 0.7em 0.7em;
  width: 100%;
  background: linear-gradient(#00000000, #000000);
}
</style>