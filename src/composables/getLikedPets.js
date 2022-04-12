import axios from "axios";
import { ref } from "vue";
import { getPetsId } from "@/helpers";

const getLikedPets = (emit) => {
  const url = `/api/likes`;
  const petList = ref([]);

  const init = async () => {
    try {
      const { data } = await axios.get(url);
      petList.value = getPetsId(data);
    } catch (e) {
      emit("setError", e.message);
    }
  };

  init();

  return petList;
};

export default getLikedPets;
