<template>
  <h2><InfoIcon />Info</h2>
  <ul>
    <li v-for="(prop, i) in info" :key="i">{{ prop }}</li>
  </ul>
</template>

<script>
import InfoIcon from "vue-material-design-icons/Information.vue";

export default {
  props: ["info"],
  components: { InfoIcon },
};
</script>

<style>
</style>