<template>
  <div v-if="details" class="filter">
    <Select
      :options="details.names"
      :title="'Animal Types'"
      @updateFilter="updateFilter"
    />
    <button @click="$emit('submitFilter', filter)">Filter</button>
  </div>
</template>

<script>
import Select from "./Select.vue";
import getAnimalTypes from "@/composables/getAnimalTypes";
import { toRefs } from "@vue/reactivity";
import useFilter from "@/composables/useFilter";

export default {
  emit: ["submitFilter"],
  props: ["token", "setError"],
  components: { Select },
  setup(props) {
    const { token, setError } = toRefs(props);
    const details = getAnimalTypes(token, setError);
    const { filter, updateFilter } = useFilter();

    return { updateFilter, details, filter };
  },
};
</script>

<style>
</style>