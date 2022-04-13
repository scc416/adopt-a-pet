import { watch, ref } from "vue";

const useError = () => {
  const error = ref("");
  let errors = [];

  const removeError = () => {
    errors = errors.slice(1);
    const hasError = errors.length;
    if (!hasError) error.value = "";
  };

  watch(error, () => {
    if (error.value) {
      errors.push(error.value);
      setTimeout(removeError, 5000);
    }
  });

  const setError = (e) => {
    error.value = e;
  };

  return { error, setError };
};

export default useError;
