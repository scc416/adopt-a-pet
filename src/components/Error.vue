<template>
  <div class="error" v-if="error">{{ error }}</div>
</template>

<script>
export default { props: ["error"] };
</script>

<style>
.error {
  position: absolute;
  background: #ffcccc;
  right: 1em;
  bottom: 1em;
  padding: 0.5em;
  z-index: 2;
  border-radius: 0.3em;
}
</style>