<template>
  <div>{{ pet.id }}</div>
  <div>{{ pet.name }}</div>
  <img :src="pet.photos[0].medium" />
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
</style>