import { ref } from "vue";

const useScrollTop = () => {
  const show = ref(false);

  const backToTop = () => window.scrollTo(0, 0);

  const scrollFn = () => {
    const y = document.documentElement.scrollTop;
    show.value = y > 300;
  };
  return { show, scrollFn, backToTop };
};

export default useScrollTop;
