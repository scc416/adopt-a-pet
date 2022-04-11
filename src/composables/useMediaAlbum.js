import { ref } from "vue";

const useMediaAlbum = () => {
  const mediaNum = ref(0);

  const updateMedia = (num) => {
    mediaNum.value = num;
  };

  return { updateMedia, mediaNum };
};

export default useMediaAlbum;
