<template>
  <div class="info">DETAILS</div>
</template>

<script>
import { toRefs } from "@vue/reactivity";

export default {
  props: ["details"],
  setup(props) {
    const { details } = toRefs(props);
    return { details };
  },
};
</script>

<style>
.info {
  background: #f9f9f9;
  padding: 3em 4em;
  border-radius: 1em;
  width: 60%;
}
</style>