import axios from "axios";
import { ref, watch } from "vue";

const getPetDetailsWithIds = (ids, token, emit) => {
  const details = ref([]);

  const addPetDetails = async (id) => {
    const url = `https://api.petfinder.com/v2/animals/${id}`;
    if (token.value) {
      try {
        const {
          data: { animal },
        } = await axios({
          url,
          method: "get",
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        });
        details.value.push(animal);
      } catch (e) {
        setError(e.message);
      }
    }
  };

  const updateDetails = () => ids.value.forEach(addPetDetails);

  updateDetails();

  watch([token, ids], updateDetails);

  return details;
};

export default getPetDetailsWithIds;
