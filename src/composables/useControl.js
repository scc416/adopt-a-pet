import { ref } from "vue";

const useControl = () => {
  const showFilter = ref(false);
  const showSort = ref(false);
  const distance = ref(null);
  let lag = null;
  let lat = null;

  const toggleFilter = () => {
    showFilter.value = !showFilter.value;
    if (showFilter.value) showSort.value = false;
  };

  const toggleSort = () => {
    showSort.value = !showSort.value;
    if (showSort.value) showFilter.value = false;
  };

  const toggleDistance = () => {
    showSort.value = !showSort.value;
  };

  return { showFilter, showSort, toggleFilter, toggleSort };
};

export default useControl;
