import { ref } from "vue";
import { pxFromTop } from "@/constants";

const useScrollTop = () => {
  const show = ref(false);

  const backToTop = () => window.scrollTo(0, 0);

  const scrollFn = () => {
    const y = document.documentElement.scrollTop;
    show.value = y > pxFromTop;
  };
  return { show, scrollFn, backToTop };
};

export default useScrollTop;
