import { ref } from "vue";

const useFilter = () => {
  const filter = ref({});
  const name = ref("");

  const updateFilter = (type, data) => {
    filter.value[type] = data;
  };

  return { filter, updateFilter, name };
};

export default useFilter;
