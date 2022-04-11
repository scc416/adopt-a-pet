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
  components: { VueMultiselect },
  setup() {
    const multiValue = ref(null);
    const options = ref([
      { name: "list" },
      { name: "of" },
      { name: "options" },
    ]);

    watch(multiValue, () => console.log(multiValue.value));

    return { multiValue, options };
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.css">
</style>