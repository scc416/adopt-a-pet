import axios from "axios";
import { ref, watch } from "vue";

const getPetList = (token) => {
  const petList = ref([]);
  const error = ref("");
  const loading = ref(false);
  let receiveToken = false;

  const updatePetList = async () => {
    if (token.value) {
      try {
        loading.value = true;
        const url = "https://api.petfinder.com/v2/animals?limit=100";
        // ? `https://api.petfinder.com/v2/animals?limit=100&page=${pageNum.value}`
        const { data } = await axios({
          url,
          method: "get",
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        });
        petList.value = data.animals.filter((pet) => pet.photos.length);
        // const {
        //   pagination: { total_pages: totalPages },
        // } = data;
        // console.log(totalPages);
        // for (let i = 2; i <= totalPages; i++) {
        //   const url = `https://api.petfinder.com/v2/animals?limit=100&page=${i}`;
        //   const { data } = await axios({
        //     url,
        //     method: "get",
        //     headers: {
        //       Authorization: `Bearer ${token.value}`,
        //     },
        //   });
        //   petList.value = petList.value.concat(data.animals);
        // }
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
