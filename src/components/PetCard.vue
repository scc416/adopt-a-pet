<template>
  <div class="pet-card">
    <div class="content">
      <div>{{ pet.id }}</div>
      <div>{{ pet.name }}</div>
    </div>
    <img :src="pet.photos[0].full" />
  </div>
</template>

<script>
export default {
  props: {
    pet: Object,
  },
  setup(props) {
    const { pet } = props;
    return { pet };
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
}

.pet-card img {
  min-width: 100%;
}

.pet-card .content {
  position: absolute;
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