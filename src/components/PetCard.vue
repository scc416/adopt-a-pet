<template>
  <router-link :to="{ name: 'petDetails', params: { id } }" class="pet-card">
    <div class="content">
      <div>{{ id }}</div>
      <div>{{ name }}</div>
    </div>
    <img :src="photo" />
  </router-link>
</template>

<script>
export default {
  props: {
    pet: Object,
  },
  setup(props) {
    const { pet } = props;
    const { id, name, photos } = pet;
    return { id, name, photo: photos[0].full };
  },
};
</script>

<style>
.pet-card {
  height: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5em;
  position: relative;
  color: #595959;
  text-decoration: none;
}

.pet-card img {
  min-width: 100%;
  min-height: 100%;
}

.pet-card .content {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.5em;
  width: 100%;
  background: #ffffffcc;
}

@media (min-width: 420px) {
  .pet-card {
    width: calc(50% - 1em);
    height: 50vw;
  }
}

@media (min-width: 768px) {
  .pet-card {
    width: calc(33.3% - 1em);
    height: 33.3vw;
  }
}

@media (min-width: 1024px) {
  .pet-card {
    width: calc(25% - 1em);
    height: 25vw;
  }
}
</style>