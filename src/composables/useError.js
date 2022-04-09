import { watch, ref } from "vue";

const useError = () => {
  const error = ref("");

  watch(error, () => {
    if (error.value) {
      console.log(error.value);
    }
  });

  return error;
};

export default useError;
