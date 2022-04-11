<template>
  <VueMultiselect
    v-model="multiValue"
    :options="source"
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
    const selected = ref(null);

    watch(selected, console.log(selected.value));
    return {
      selected: null,
      options: ["list", "of", "options"],
    };
  },
};
</script>

<style>
</style>