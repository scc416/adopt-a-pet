<template>
  <Logo />
  <router-view :token="token" :error="error" />
</template>

<script>
import Logo from "./components/Logo.vue";
import getToken from "./composables/getToken";

export default {
  components: { Logo },
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
  color: #595959;
}

#app {
  margin: 2em 3.4em;
}

* {
  box-sizing: border-box;
}
</style>
