<template>
  <div class="error" v-if="error">{{ error }}</div>
</template>

<script>
export default { props: ["error"] };
</script>

<style>
.error {
  position: absolute;
  color: #fff;
  background: #f98381;
  right: 1em;
  top: 1em;
  padding: 0.5em;
  z-index: 2;
  border-radius: 0.3em;
}
</style>