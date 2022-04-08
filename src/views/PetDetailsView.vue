<template>
  <h1>{{ details }}</h1>
</template>

<script>
import { useRoute } from "vue-router";
import { toRefs } from "@vue/reactivity";
import getPetDetails from "@/composables/getPetDetails";

export default {
  props: ["token", "error"],
  setup(props) {
    const { token, error } = toRefs(props);
    const { params } = useRoute();
    const { id } = params;
    const { details } = getPetDetails(id, token, error);
    return { details };
  },
};
</script>

<style>
</style>