import { ref } from "vue";

const getPhotos = (photos) => {
  const imageUrl = ref(photos.value[0].full);

  const updateImage = (num) => {
    imageUrl.value = photos.value[num].full;
  };

  return { updateImage, imageUrl };
};

export default getPhotos;
