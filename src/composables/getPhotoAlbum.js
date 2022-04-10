import { ref } from "vue";

const getPhotos = () => {
  const imageNum = ref(0);

  const updateImage = (num) => {
    imageNum.value = num;
  };

  return { updateImage, imageNum };
};

export default getPhotos;
