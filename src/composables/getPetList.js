import axios from "axios";
import { ref, watch } from "vue";
import { getQuery } from "@/helpers";

const getPetList = (token, emit) => {
  const petList = ref([]);
  const loading = ref(token.value ? false : true);
  let receiveToken = false;
  let currentPage = 1;
  let totalPages = null;
  const isEndOfPage = ref(false);

  const updatePetList = async (filter) => {
    if (token.value) {
      loading.value = true;
      try {
        const query = getQuery(filter);
        const url = "https://api.petfinder.com/v2/animals?limit=100" + query;
        const { data } = await axios({
          url,
          method: "get",
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        });
        petList.value = data.animals.filter(
          (pet) => pet.videos.length || pet.photos.length
        );
        const {
          pagination: { total_pages },
        } = data;
        currentPage = 1;
        totalPages = total_pages;
        loading.value = false;
        isEndOfPage.value = false;
      } catch (e) {
        emit("setError", e.message);
        loading.value = false;
      }
    }
  };

  const loadMore = async () => {
    loading.value = true;
    currentPage++;
    if (currentPage === totalPages) isEndOfPage.value = true;
    try {
      const url = `https://api.petfinder.com/v2/animals?limit=100&page=${currentPage}`;
      const {
        data: { animals },
      } = await axios({
        url,
        method: "get",
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });
      petList.value = petList.value.concat(
        animals.filter((pet) => pet.videos.length || pet.photos.length)
      );
      petList.value = petList.value.filter(
        ({ id: idToBeFound }, index, array) => {
          const arrayBefore = array.slice(0, index);
          const alreadyExist = arrayBefore.find(({ id }) => id === idToBeFound);
          if (alreadyExist) return false;
          return true;
        }
      );
      loading.value = false;
    } catch (e) {
      emit("setError", e.message);
      loading.value = false;
    }
  };

  watch(token, () => {
    if (!receiveToken) {
      updatePetList();
      receiveToken = true;
    }
  });

  // watch(error, () => {
  //   loading.value = false;
  // });

  updatePetList();

  return { petList, updatePetList, loading, loadMore, isEndOfPage };
};

export default getPetList;
