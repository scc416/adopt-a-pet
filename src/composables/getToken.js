import axios from "axios";
import { ref } from "vue";

const getToken = () => {
  const token = ref("");
  const error = ref("");

  // set timeout to update Token when it is expired
  const setUpdateTimeInterval = (second) => {
    const milli = second * 1000;
    setTimeout(() => updateToken(), milli);
  };

  const updateToken = async () => {
    try {
      const { data } = await axios.post(
        "https://api.petfinder.com/v2/oauth2/token",
        {
          grant_type: "client_credentials",
          client_id: process.env.VUE_APP_ID,
          client_secret: process.env.VUE_APP_SECRET,
        }
      );
      const { expires_in, access_token } = data;
      token.value = access_token;
      setUpdateTimeInterval(expires_in);
    } catch (e) {
      error.value = e.message;
      console.log(e);
    }
  };

  updateToken();

  return { token, error };
};

export default getToken;