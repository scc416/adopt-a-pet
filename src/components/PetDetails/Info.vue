<template>
  <div class="info">
    <component :is="details.icon" />{{ details.name }}
    <div class="grid">
      <div>Gender:</div>
      <div>{{ details.gender }}</div>
      <div>Age:</div>
      <div>{{ details.age }}</div>
      <div>Name:</div>
      <div>{{ details.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["details"],
};
</script>

<style>
.info {
  background: #f9f9f9;
  padding: 3em 4em;
  border-radius: 1em;
  width: 60%;
}

.grid {
  display: grid;
  grid-template-columns: auto 1fr;
}
</style>