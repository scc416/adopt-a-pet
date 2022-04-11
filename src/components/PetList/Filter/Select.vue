<template>
  <label class="typo__label">{{ title }}</label>
  <VueMultiselect
    v-model="value"
    :options="options"
    :close-on-select="true"
    :multiSelect="multiSelect"
    placeholder="Pick one"
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
  props: ["options", "title", "keyName", "multiSelect"],
  components: { VueMultiselect },
  setup(props, { emit }) {
    const { keyName } = toRefs(props);
    const value = ref(null);
    watch(value, () => {
      emit("updateFilter", keyName.value, value.value);
    });
    return { value };
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.css">
</style>