<template>
  <div v-if="details">
    <Select :options="details.names" />
  </div>
</template>

<script>
import Select from "./Select.vue";
import getAnimalTypes from "@/composables/getAnimalTypes";
import { toRefs } from "@vue/reactivity";

export default {
  props: ["token", "error"],
  components: { Select },
  setup(props) {
    const { token, error } = toRefs(props);
    const details = getAnimalTypes(token, error);
    return { details };
  },
};
</script>

<style>
</style>