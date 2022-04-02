<template>
  <router-link :to="{ name: 'home' }">Home</router-link>
</template>

<script>
import getToken from "./composables/getToken";

export default {
  setup() {
    const { token, error } = getToken();
    return { token, error };
  },
};
</script>


<style>
</style>
