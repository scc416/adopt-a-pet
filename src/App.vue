<template>
  <router-link class="logo" :to="{ name: 'home' }"
    ><img src="../public/favicon.png" />Adopt A Pet</router-link
  >
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
.logo {
  position: absolute;
  top: 2em;
  left: 7em;
  color: #3aab97;
  text-decoration: none;
}

.logo img {
  width: 3em;
}
</style>
