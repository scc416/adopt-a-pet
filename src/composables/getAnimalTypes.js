import axios from "axios";
import { ref, watch } from "vue";
import { formatAnimalTypes } from "@/helpers";

const getAnimalTypes = (token, emit) => {
  const details = ref(null);
  let gotDetails = false;
  const url = `https://api.petfinder.com/v2/types`;

  const updateDetails = async () => {
    if (token.value) {
      try {
        const {
          data: { types },
        } = await axios({
          url,
          method: "get",
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        });
        details.value = formatAnimalTypes(types);
        gotDetails = true;
      } catch (e) {
        emit("setError", e.message);
      }
    }
  };

  updateDetails();

  watch(token, () => {
    if (!gotDetails) updateDetails();
  });

  return details;
};

export default getAnimalTypes;
