import { ref } from "vue";

const useControl = () => {
  const showFilter = ref(false);
  const showSort = ref(false);

  const toggleFilter = () => {
    showFilter.value = !showFilter.value;
    if (showFilter.value) showSort.value = false;
  };

  const toggleSort = () => {
    showSort.value = !showSort.value;
    if (showSort.value) showFilter.value = false;
  };

  return { showFilter, showSort, toggleFilter, toggleSort };
};

export default useControl;
