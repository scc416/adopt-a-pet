<template>
  <div class="button-group">
    <button
      v-for="(data, i) in sortingData"
      :key="i"
      @click="submitSort(data.value)"
      :class="{ selected: selected === data.value }"
    >
      {{ data.name }}
    </button>
  </div>
</template>

<script>
import { sortingData } from "@/constants";
import { ref } from "vue";

export default {
  emits: ["submitSort"],
  setup(props, { emit }) {
    const selected = ref(sortingData[0].value);
    const submitSort = (sort) => {
      if (selected.value === sort) return;
      selected.value = sort;
      emit("submitSort", null, null, sort);
    };

    return { submitSort, sortingData, selected };
  },
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

.selected {
  background: #3aab97;
  color: #fff;
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