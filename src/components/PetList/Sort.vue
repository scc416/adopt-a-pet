<template>
  <div class="button-group">
    <button>Recent (Ascending)</button>
    <button>Recent (Descending)</button>
    <button>Recent (Descending)</button>
  </div>
</template>

<script>
export default {
  emits: ["submitSort"],
  setup() {},
};
</script>

<style>
.button-group {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 0.5em;
}

.button-group > * {
  border-radius: 0;
  padding: 0.6em;
  font-size: 0.95em;
  border: #3aab97 solid 0.1em;
  color: #3aab97;
  border-right: none;
}

.button-group > *:hover {
  background: #3aab97;
  color: #fff;
  cursor: pointer;
}

.button-group > *:first-child {
  border-top-left-radius: 2em;
  border-bottom-left-radius: 2em;
  padding-left: 1em;
}

.button-group > *:last-child {
  border-top-right-radius: 2em;
  border-bottom-right-radius: 2em;
  border-right: #3aab97 solid 0.1em;
  padding-right: 1em;
}
</style>