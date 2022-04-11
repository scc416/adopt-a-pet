import { ref } from "vue";

const useFilter = () => {
  const filter = ref({});

  const updateFilter = (type, data) => {
    filter.value[type] = data;
  };

  return { filter, updateFilter };
};

export default useFilter;
