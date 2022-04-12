import axios from "axios";
import { ref } from "vue";

const getLike = (hasToGetLike, isLike, petId, emit) => {
  const like = ref(hasToGetLike ? false : isLike);
  const url = `/api/likes/${petId}`;

  const toggleLike = async () => {
    try {
      await axios.post(url);
      like.value = !like.value;
    } catch (e) {
      emit("setError", e.message);
    }
  };

  const get = async () => {
    try {
      const { data } = await axios.get(url);
      like.value = data.length ? true : false;
    } catch (e) {
      emit("setError", e.message);
    }
  };

  if (hasToGetLike) get();

  return { like, toggleLike };
};

export default getLike;
