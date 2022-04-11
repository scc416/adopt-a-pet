<template>
  <label class="typo__label">{{ title }}</label>
  <VueMultiselect
    v-model="multiValue"
    :options="options"
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
  props: ["options", "title", "keyName"],
  components: { VueMultiselect },
  setup(props, { emit }) {
    const { keyName } = toRefs(props);
    const multiValue = ref([]);
    watch(multiValue, () => {
      emit("updateFilter", keyName.value, multiValue.value);
    });
    return { multiValue };
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.css">
</style>