<template>
  <div v-if="details" class="filter">
    <Select
      :options="details.type"
      :title="'Animal Types'"
      @updateFilter="updateFilter"
      :keyName="'type'"
      :multiSelect="false"
    />
    <button @click="submitFilter()">Filter</button>
  </div>
</template>

<script>
import Select from "./Select.vue";
import getAnimalTypes from "@/composables/getAnimalTypes";
import { toRefs } from "@vue/reactivity";
import useFilter from "@/composables/useFilter";

export default {
  emit: ["submitFilter", "setError"],
  props: ["token"],
  components: { Select },
  setup(props, { emit }) {
    const { token } = toRefs(props);
    const details = getAnimalTypes(token, emit);
    const { filter, updateFilter } = useFilter();

    const submitFilter = () => emit("submitFilter", filter);

    return { submitFilter, updateFilter, details, filter };
  },
};
</script>

<style>
</style>