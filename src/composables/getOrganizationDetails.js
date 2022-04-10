import axios from "axios";
import { ref, watch } from "vue";

const getOrganizationDetails = (token, id, error) => {
  const details = ref(null);
  let gotDetails = false;
  const url = `https://api.petfinder.com/v2/organizations/${id}`;
  console.log("id", id);

  const updateDetails = async () => {
    if (token.value) {
      try {
        const {
          data: { organization },
        } = await axios({
          url,
          method: "get",
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        });
        details.value = organization;
        gotDetails = true;
        console.log(organization);
      } catch (e) {
        error.value = e.message;
      }
    }
  };

  updateDetails();

  watch(token, () => {
    if (!gotDetails) updateDetails();
  });

  return details;
};

export default getOrganizationDetails;
