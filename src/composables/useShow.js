import { ref } from "vue";

const useShow = () => {
  const show = ref(false);
  const toggleShow = () => (show.value = !show.value);

  return { show, toggleShow };
};

export default useShow;
