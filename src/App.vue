<template>
  <Logo />
  <router-view />
</template>

<script>
import getToken from "./composables/getToken";
import Logo from "./components/Logo.vue";

export default {
  setup() {
    const { token, error } = getToken();
    return { token, error };
  },
  components: { Logo },
};
</script>

<style>
body {
  font-family: "Open Sans";
  margin: 0;
  padding: 0;
  color: #595959;
}

* {
  box-sizing: border-box;
}
</style>
