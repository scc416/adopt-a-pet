import axios from "axios";
import { ref, watch } from "vue";

const getPetDetails = (id, token, setError) => {
  const details = ref(null);
  const loading = ref(token.value ? false : true);
  let gotDetails = false;
  const url = `https://api.petfinder.com/v2/animals/${id}`;

  const updateDetails = async () => {
    if (token.value) {
      loading.value = true;
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
        details.value = animal;
        gotDetails = true;
      } catch (e) {
        setError(e.message);
      }
      loading.value = false;
    }
  };

  updateDetails();

  watch(token, () => {
    if (!gotDetails) updateDetails();
  });

  return { details, loading };
};

export default getPetDetails;
