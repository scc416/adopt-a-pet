<template>
  <div class="small-spin"></div>
</template>

<script>
export default {};
</script>

<style>
.small-spin {
  display: block;
  width: 1em;
  height: 1em;
  margin: 6px auto;
  border: 0.6px solid transparent;
  border-radius: 50%;
  border-top-color: #000000CC;
  animation: spin 1s ease infinite;
}
</style>