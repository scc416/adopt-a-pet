import axios from "axios";
import { ref, watch } from "vue";
import { formatBreeds } from "@/helpers";

const getAnimalBreeds = (token, filter, emit) => {
  const details = ref(null);
  let gotDetails = false;

  const updateDetails = async () => {
    console.log("UPDATING");
    if (token.value && filter.value && filter.value.type) {
      console.log("YES");
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
        details.value = formatBreeds(breeds);
        gotDetails = true;
      } catch (e) {
        emit("setError", e.message);
      }
    } else {
      console.log("NO");

      details.value = null;
    }
  };

  updateDetails();

  watch(token, () => {
    if (!gotDetails) updateDetails();
  });

  watch(filter.value, () => {
    updateDetails();
    console.log("FILTER updated")
  });

  return details;
};

export default getAnimalBreeds;
