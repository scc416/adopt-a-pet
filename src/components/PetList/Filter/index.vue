<template>
  <div v-if="details" class="filter">
    <Select
      :options="details.names"
      :title="'Animal Types'"
      :value="names"
    />
    <button @click="getOptions()">Filter</button>
  </div>
</template>

<script>
import Select from "./Select.vue";
import getAnimalTypes from "@/composables/getAnimalTypes";
import { ref, toRefs } from "@vue/reactivity";

export default {
  props: ["token", "setError"],
  components: { Select },
  setup(props) {
    const { token, setError } = toRefs(props);
    const details = getAnimalTypes(token, setError);
    const names = ref(null);
    const getOptions = () => console.log(names.value);

    return { details, getOptions, names };
  },
};
</script>

<style>
</style>