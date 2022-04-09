<template>
  <div class="error" v-if="error">
    <ErrorIcon />
    {{ error }}
  </div>
</template>

<script>
import ErrorIcon from "vue-material-design-icons/AlertCircle.vue";

export default { props: ["error"], components: { ErrorIcon } };
</script>

<style>
.error {
  position: absolute;
  background: #ffcccc;
  right: 1em;
  bottom: 1em;
  padding: 0.3em 0.5em;
  z-index: 2;
  border-radius: 0.3em;
  display: flex;
  align-items: center;
}

.error > *:first-child {
  position: relative;
  top: 0.2em;
  right: 0.1em;
}
</style>