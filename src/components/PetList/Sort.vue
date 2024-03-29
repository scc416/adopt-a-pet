<template>
  <div class="button-group">
    <button
      v-for="(data, i) in sorting"
      :key="i"
      @click="submitSort(data.value)"
      :class="{ selected: selected === data.value }"
    >
      {{ data.name }}
    </button>
  </div>
</template>

<script>
import { sortingRecentData, sortingDistanceData } from "@/constants";
import { ref, toRefs, watch } from "vue";

const sortingData = sortingRecentData.concat(sortingDistanceData);

export default {
  props: ["location", "sort"],
  emits: ["submitSort"],
  setup(props, { emit }) {
    const { location, sort } = toRefs(props);
    const selected = ref(
      location.value || (!location.value && !sort.value.includes("distance"))
        ? sort.value
        : sortingRecentData[0].value
    );
    const submitSort = (sort) => {
      if (selected.value === sort) return;
      selected.value = sort;
      emit("submitSort", sort, location);
    };

    const sorting = ref(location.value ? sortingData : sortingRecentData);
    watch(location, () => {
      sorting.value = location.value ? sortingData : sortingRecentData;
      selected.value =
        location.value ||
        (!location.value && !selected.value.includes("distance"))
          ? selected.value
          : sortingRecentData[0].value;
    });

    return { submitSort, sorting, selected };
  },
};
</script>

<style>
.button-group {
  width: 100%;
  display: flex;
  justify-content: center;
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