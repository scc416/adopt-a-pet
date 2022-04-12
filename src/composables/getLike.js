import axios from "axios";
import { ref } from "vue";

const getLike = (petId, emit) => {
  const like = ref(false);
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

  get();

  return { like, toggleLike };
};

export default getLike;
