<template>
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
import { ref } from "@vue/reactivity";
import VueMultiselect from "vue-multiselect";
import { watch } from "@vue/runtime-core";

export default {
  props: ["options"],
  components: { VueMultiselect },
  setup() {
    const multiValue = ref(null);
    watch(multiValue, () => console.log(multiValue.value));
    return { multiValue };
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.css">
</style>