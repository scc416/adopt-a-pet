<template>
  <h1>{{ id }}</h1>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  setup() {
    const { params } = useRoute();
    const { id } = params;
    return { id };
  },
};
</script>

<style>
</style>