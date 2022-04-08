import axios from "axios";
import { ref, watch } from "vue";

const getPetDetails = (id, token, error) => {
  const details = ref({});
  let gotDetails = false;
  const url = `https://api.petfinder.com/v2/animals/${id}`;

  const updateDetails = async () => {
    if (token.value) {
      try {
        console.log("LINE");
        const { data } = await axios({
          url,
          method: "get",
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        });
        details.value = data;
        gotDetails = true;
      } catch (e) {
        error.value = e.message;
      }
    }
  };

  watch(token, () => {
    if (!gotDetails) updateDetails();
  });

  return { details };
};

export default getPetDetails;
