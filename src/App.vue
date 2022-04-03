<template>
  <Logo />
  <router-view :petList="petList" />
</template>

<script>
import Logo from "./components/Logo.vue";
import getToken from "./composables/getToken";
import getPetList from "./composables/getPetList";

export default {
  components: { Logo },
  setup() {
    const { token, error } = getToken();
    const { petList, updatePetList, loading } = getPetList(token);
    return { petList };
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

* {
  box-sizing: border-box;
}
</style>
