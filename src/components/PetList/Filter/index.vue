<template>
  <div v-if="details" class="filter">
    <Select
      :options="details.names"
      :title="'Animal Types'"
      @update="setValue"
    />
    <button @click="getOptions()">Filter</button>
  </div>
</template>

<script>
import Select from "./Select.vue";
import getAnimalTypes from "@/composables/getAnimalTypes";
import { toRefs } from "@vue/reactivity";

export default {
  props: ["token", "setError"],
  components: { Select },
  setup(props) {
    const { token, setError } = toRefs(props);
    const details = getAnimalTypes(token, setError);
    const getOptions = () => {
      console.log("CLICK");
    };
    const setValue = (str) => {
      console.log(str);
    };

    return { setValue, details, getOptions };
  },
};
</script>

<style>
</style>