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
import { toRefs } from "@vue/reactivity";
import VueMultiselect from "vue-multiselect";
import { watch } from "@vue/runtime-core";

export default {
  props: ["options", "title", "value"],
  components: { VueMultiselect },
  setup(props) {
    const { value, title, options } = toRefs(props);
    watch(value, () => console.log(value.value));
    return { multiValue: value, title, options };
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.css">
</style>