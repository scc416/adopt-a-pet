<template>
  <div class="control">
    <span
      class="control-button"
      @click="toggleFilter()"
      :class="{ show: showFilter }"
      >{{ showFilter ? "Hide" : "Show" }} Filter</span
    >
    <span
      class="control-button"
      @click="toggleSort()"
      :class="{ show: showSort }"
      >{{ showSort ? "Hide" : "Show" }} Sorting</span
    >
  </div>
</template>

<script>
export default {
  props: ["showFilter", "showSort", "toggleFilter", "toggleSort"],
};
</script>

<style>
.control {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.4em;
  flex-grow: 0;
}

span.control-button {
  margin-left: 1em;
  padding: 0.5em 0.8em;
  border-radius: 0.2em;
  font-weight: 700;
  font-size: 0.8em;
  border: #3aab97 solid 0.1em;
  color: #fff;
  background: #3aab97;
}

span.control-button:hover {
  cursor: pointer;
}

span.control-button.show {
  background: #ffffff00;
  color: #3aab97;
}
</style>