import { ref } from "vue";

const useFilter = () => {
  const filter = ref({});
  const name = ref("");
  const location = ref("");

  const updateFilter = (type, data) => {
    filter.value[type] = data;
  };

  return { filter, updateFilter, name, location };
};

export default useFilter;
