<template>
  <router-link class="logo" :to="{ name: 'home' }">
    <img src="../../public/favicon.png" />
    Adopt a Pet
  </router-link>
</template>

<script>
export default {};
</script>

<style>
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
</style>