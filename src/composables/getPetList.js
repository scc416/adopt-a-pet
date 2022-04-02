import axios from "axios";
import { ref, watch } from "vue";

const getPetList = (token) => {
  const petList = ref([]);
  const error = ref("");
  const loading = ref(false);
  let receiveToken = false;

  const updatePetList = async (pageNum) => {
    if (token.value) {
      try {
        const url = pageNum
          ? `https://api.petfinder.com/v2/animals?page=${pageNum.value}`
          : "https://api.petfinder.com/v2/animals";
        loading.value = true;
        const { data } = await axios({
          url,
          method: "get",
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        });
        petList.value = data;
        loading.value = false;
      } catch (e) {
        error.value = e.message;
      }
    }
  };

  watch(token, () => {
    if (!receiveToken) {
      updatePetList();
      receiveToken = true;
    }
  });

  updatePetList();

  return { petList, updatePetList, loading };
};

export default getPetList;
