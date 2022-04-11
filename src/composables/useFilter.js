import { ref } from "vue";

const useFilter = () => {
  const filter = ref({});

  const updateFilter = (type, data) => {
    filter.value[type] = data;
    console.log(filter.value);
  };

  return { filter, updateFilter };
};

export default useFilter;
