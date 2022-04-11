<template>
  <h2><InfoIcon />Info</h2>
  <ul>
    <li v-for="(prop, i) in info" :key="i">{{ prop }}</li>
    <li v-for="(characteristic, i) in characteristics" :key="i">
      {{ characteristic }}
    </li>
  </ul>
</template>

<script>
import InfoIcon from "vue-material-design-icons/Information.vue";

export default {
  props: ["info", "characteristics"],
  components: { InfoIcon },
};
</script>

<style>
</style>