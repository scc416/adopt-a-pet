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
body {
  font-family: "Open Sans";
}

.logo {
  position: absolute;
  top: 1.3em;
  left: 3em;
  color: #3aab97;
  text-decoration: none;
  font-family: "Raleway";
  display: flex;
  align-items: center;
  font-weight: 900;
}

.logo img {
  width: 1.7em;
  margin-right: 0.25em;
}
</style>
