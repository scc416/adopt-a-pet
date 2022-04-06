import { ref } from "vue";

const useScrollTop = () => {
  const show = ref(false);
  const scrollFn = () => {
    const y = document.documentElement.scrollTop;
    console.log(y);
    show.value = y > 300;
  };
  return { show, scrollFn };
};

export default useScrollTop;
