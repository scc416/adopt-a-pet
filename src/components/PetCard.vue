<template>
  <div class="pet-card">
    <div>{{ pet.id }}</div>
    <div>{{ pet.name }}</div>
    <img :src="pet.photos[0].medium" />
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
  width: 100%;
}

.pet-card img {
  width: 100%;
}

@media (min-width: 420px) {
  .pet-card {
    width: 50%;
  }
}

@media (min-width: 768px) {
  .pet-card {
    width: 33.3%;
  }
}

@media (min-width: 1024px) {
  .pet-card {
    width: 25%;
  }
}

/* Another tablet breakpoint is maximum width of 1024px */
</style>