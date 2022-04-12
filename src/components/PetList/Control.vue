<template>
  <div class="control">
    <span @click="toggleFilter()" :class="{ show: showFilter }"
      >{{ showFilter ? "Hide" : "Show" }} Filter</span
    >
    <span @click="toggleSort()" :class="{ show: showSort }"
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
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 0.4em;
}

.control span {
  margin-left: 1em;
  padding: 0.5em 0.8em;
  border-radius: 0.2em;
  font-weight: 700;
  font-size: 0.8em;
  border: #3aab97 solid 0.1em;
}

.control span:hover {
  cursor: pointer;
}

.control span {
  color: #fff;
  background: #3aab97;
}

.control span.show {
  background: #ffffff00;
  color: #3aab97;
}
</style>