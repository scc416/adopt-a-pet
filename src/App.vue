<template>
  <router-link class="logo" :to="{ name: 'home' }"
    ><img src="../public/favicon.png" />Adopt A Pet</router-link
  >
  <router-view />
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
  margin: 0;
  padding: 0;
}

.logo {
  position: absolute;
  top: 1.4em;
  left: 2.8em;
  color: #3aab97;
  text-decoration: none;
  font-family: "Raleway";
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: 1.8em;
}

.logo img {
  width: 1.4em;
  margin-right: 0.25em;
}

* {
  box-sizing: border-box;
}
</style>
