<template>
  <router-link :to="{ name: 'petDetails', params: { id } }" class="pet-card">
    <div class="content">
      <div><component :is="icon" /> {{ name }}</div>
      <div>{{ breeds.primary }}</div>
      <div>{{ gender }}</div>
      <div>{{ age }}</div>
      <div>{{ city }}, {{ country }}</div>
    </div>
    <img :src="photo" />
  </router-link>
</template>

<script>
import { getPetIcon } from "@/helpers";

export default {
  props: ["pet"],
  setup(props) {
    const { pet } = props;
    const { id, name, photos, gender, breeds, age, contact, species } = pet;
    const icon = getPetIcon(species);
    const { address } = contact;
    const { country, city } = address;
    return {
      id,
      name,
      photo: photos[0].full,
      gender,
      breeds,
      age,
      country,
      city,
      icon,
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