<template>
  <label class="typo__label">{{ title }}</label>
  <VueMultiselect
    v-model="multiValue"
    :options="options"
    :multiple="true"
    :close-on-select="true"
    placeholder="Pick some"
    label="name"
    track-by="name"
  />
</template>

<script>
import { ref, toRefs } from "@vue/reactivity";
import VueMultiselect from "vue-multiselect";
import { watch } from "@vue/runtime-core";

export default {
  emits: ["updateFilter"],
  props: ["options", "title"],
  components: { VueMultiselect },
  setup(props, { emit }) {
    const { title } = toRefs(props);
    const multiValue = ref(null);
    watch(multiValue, () => {
      emit("updateFilter", title, multiValue.value);
    });
    return { multiValue };
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.css">
</style>