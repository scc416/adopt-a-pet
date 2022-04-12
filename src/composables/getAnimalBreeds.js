import axios from "axios";
import { ref, watch } from "vue";
import { formatBreeds } from "@/helpers";

const getAnimalBreeds = (token, filter, emit) => {
  const details = ref(null);
  let gotDetails = false;

  const updateDetails = async () => {
    if (token.value && filter.value && filter.value.type) {
      const url = `https://api.petfinder.com/v2/types/${filter.value.type.name}/breeds`;
      try {
        const {
          data: { breeds },
        } = await axios({
          url,
          method: "get",
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        });
        console.log("UPDATING");
        details.value = formatBreeds(breeds);
        gotDetails = true;
      } catch (e) {
        emit("setError", e.message);
      }
    } else {
      details.value = null;
    }
  };

  updateDetails();

  watch(token, () => {
    if (!gotDetails) updateDetails();
  });

  let type = null;
  watch(filter.value, () => {
    if (!filter.value.type) {
      type = null;
      details.value = [];
    }
    if (filter.value.type) {
      if (type !== filter.value.type.name) {
        details.value = [];
        type = filter.value.type.name;
        updateDetails();
      }
    }
  });

  return details;
};

export default getAnimalBreeds;
