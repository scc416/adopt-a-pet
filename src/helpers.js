import DogIcon from "vue-material-design-icons/DogSide.vue";
import CatIcon from "vue-material-design-icons/Cat.vue";
import RabbitIcon from "vue-material-design-icons/Rabbit.vue";
import MouseIcon from "vue-material-design-icons/Rodent.vue";
import HorseIcon from "vue-material-design-icons/Horse.vue";
import BirdIcon from "vue-material-design-icons/Bird.vue";
import FishIcon from "vue-material-design-icons/Fishbowl.vue";
import BarnIcon from "vue-material-design-icons/Barn.vue";
import UnknownIcon from "vue-material-design-icons/EmoticonNeutral.vue";

export const getPetIcon = (pet) => {
  switch (pet) {
    case "Dog":
      return DogIcon;
    case "Cat":
      return CatIcon;
    case "Small & Furry":
      return MouseIcon;
    case "Horse":
      return HorseIcon;
    case "Bird":
      return BirdIcon;
    case "Scales, Fins & Other":
      return FishIcon;
    case "Rabbit":
      return RabbitIcon;
    case "Barnyard":
      return BarnIcon;
    default:
      return UnknownIcon;
  }
};

export const getBreed = ({ primary, secondary }) => {
  if (!primary) return "Unknown";
  if (!secondary) return primary;
  return `${primary} & ${secondary} Mix`;
};

export const getShortAddress = (address) => {
  const { country, state, city } = address;
  const countryName = country === "US" ? "United States" : "Canada";
  if (state) return `${city}, ${state}, ${countryName}`;
  return `${city}, ${countryName}`;
};

const getColour = ({ primary, secondary, tertiary }) => {
  if (!secondary) return primary;
  if (!tertiary) return `${primary}, ${secondary}`;
  return `${primary}, ${secondary}, ${tertiary}`;
};

export const getFormattedInfo = (details) => {
  const { value } = details;
  const {
    name,
    gender,
    age,
    colors,
    size,
    description,
    url,
    breeds,
    contact: { address },
    status,
    coat,
  } = value;
  const formattedInfo = {
    name,
    gender,
    age,
    colour: getColour(colors),
    size,
    description,
    url,
    breed: getBreed(breeds),
    location: getShortAddress(address),
    status,
    coat,
  };
  return formattedInfo;
};
