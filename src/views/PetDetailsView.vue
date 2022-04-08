<template>
  <div v-if="details">
    <div></div>
    <div></div>
  </div>
  <Spin v-if="loading" />
</template>

<script>
import Spin from "../components/Spin.vue";
import { useRoute } from "vue-router";
import { toRefs } from "@vue/reactivity";
import getPetDetails from "@/composables/getPetDetails";

export default {
  props: ["token", "error"],
  components: { Spin },
  setup(props) {
    const { token, error } = toRefs(props);
    const { params } = useRoute();
    const { id } = params;
    const { details, loading } = getPetDetails(id, token, error);
    return { details, loading };
  },
};
</script>

<style>
</style>