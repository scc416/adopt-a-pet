import DogIcon from "vue-material-design-icons/DogSide.vue";
import CatIcon from "vue-material-design-icons/Cat.vue";
import RabbitIcon from "vue-material-design-icons/Rabbit.vue";
import MouseIcon from "vue-material-design-icons/Rodent.vue";
import HorseIcon from "vue-material-design-icons/Horse.vue";
import BirdIcon from "vue-material-design-icons/Bird.vue";
import FishIcon from "vue-material-design-icons/Fishbowl.vue";
import BarnIcon from "vue-material-design-icons/Barn.vue";
import UnknownIcon from "vue-material-design-icons/EmoticonNeutral.vue";
import { attibutesValue } from "./constants";

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

const toSentenceCase = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

const getCharacteristics = (tags) => {
  let result = "";
  tags.forEach((tag, i) => {
    if (i) result += `, ${tag}`;
    if (!i) result += tag;
  });
  return result;
};

const getInfo = (attributes, environment) => {
  const info = [];
  for (const attribute in attributes) {
    const value = attributes[attribute];
    if (value) {
      const isSpecialNeed = attribute === "special_needs";
      const sentence = isSpecialNeed ? value : attibutesValue[attribute];
      info.push(sentence);
    }
  }

  for (const item in environment) {
    const value = environment[item];
    if (value) info.push(`Good with ${item}`);
  }

  return info;
};

const getAddress = (address) => {
  
  // address1: null
  // address2: null
  // city: "Mount Juliet"
  // country: "US"
  // postcode: "37122"
  // state: "TN"
}

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
    tags,
    attributes,
    environment,
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
    status: toSentenceCase(status),
    coat,
    characteristics: getCharacteristics(tags),
    info: getInfo(attributes, environment),
    address: getAddress(address)
  };
  return formattedInfo;
};
