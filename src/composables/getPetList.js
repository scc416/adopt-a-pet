import axios from "axios";
import { ref } from "vue";

const getPetList = (token) => {
  const petList = ref([]);
  const error = ref("");
  const loading = ref(false);

  const updatePetList = async () => {
    try {
      loading.value = true;
      const { data } = await axios({
        url: "https://api.petfinder.com/v2/animals",
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      petList.value = data;
      loading.value = false;
    } catch (e) {}
  };

  return { petList, updatePetList, loading };
};

export default getPetList;
