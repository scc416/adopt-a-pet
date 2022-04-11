<template>
  <Nav />
  <Error :error="error" />
  <router-view :token="token" @setError="setError" />
</template>

<script>
import Nav from "./components/Nav.vue";
import getToken from "./composables/getToken";
import Error from "./components/Error.vue";
import useError from "./composables/useError";

export default {
  components: { Nav, Error },
  setup() {
    const { error, setError } = useError();
    const token = getToken(setError);
    return { token, setError, error };
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
