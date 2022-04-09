<template>
  <Logo />
  <Error :error="error" />
  <router-view :token="token" :error="error" />
</template>

<script>
import Logo from "./components/Logo.vue";
import getToken from "./composables/getToken";
import Error from "./components/Error.vue";
import useError from "./composables/useError";

export default {
  components: { Logo, Error },
  setup() {
    const error = useError();
    const token = getToken(error);
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
  background: #f0f0f0;
  z-index: -2;
}

#app {
  margin: 2em 3.4em;
}

* {
  box-sizing: border-box;
}
</style>
