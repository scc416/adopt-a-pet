import DogIcon from "vue-material-design-icons/DogSide.vue";
import CatIcon from "vue-material-design-icons/Cat.vue";
import RabbitIcon from "vue-material-design-icons/Rabbit.vue";
import MouseIcon from "vue-material-design-icons/Rodent.vue";
import HorseIcon from "vue-material-design-icons/Horse.vue";
import BirdIcon from "vue-material-design-icons/Bird.vue";
import FishIcon from "vue-material-design-icons/Fishbowl.vue";
import BarnIcon from "vue-material-design-icons/Barn.vue";
import UnknownIcon from "vue-material-design-icons/EmoticonNeutral.vue";
import { attibutesValue, replaceQuery, replaceQueryValue } from "./constants";

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

const getCountry = (code) => {
  return code === "US" ? "United States" : "Canada";
};

export const getShortAddress = (address) => {
  const { country, state, city } = address;
  const countryName = getCountry(country);
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

const getInfo = (attributes, environment) => {
  const info = [];
  for (const attribute in attributes) {
    const value = attributes[attribute];
    if (value) {
      const sentence = attibutesValue[attribute];
      info.push(sentence);
    }
  }

  for (const item in environment) {
    const value = environment[item];
    if (value) info.push(`Good with ${item}`);
  }

  return info;
};

const getAddress = ({
  address1,
  address2,
  city,
  country: countryCode,
  postcode,
  state,
}) => {
  let result = [];
  const country = getCountry(countryCode);

  if (address1) result.push(address1);
  if (address2) result.push(address2);
  result.push(`${city}, ${state}`);
  result.push(country);
  result.push(postcode);
  return result;
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
    contact: { address, email, phone },
    status,
    coat,
    tags,
    attributes,
    environment,
    type,
    organization_id,
    id,
  } = value;
  const formattedInfo = {
    id,
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
    characteristics: tags.filter((characteristic) => characteristic),
    info: getInfo(attributes, environment),
    address: getAddress(address),
    email,
    phone,
    type,
    organizationId: organization_id,
  };
  console.log(formattedInfo);
  return formattedInfo;
};

const validURL = (str) => {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str) && str;
};

const getSrc = (embed) => {
  const iOf1 = embed.indexOf('src="');
  const slice1 = embed.slice(iOf1 + 5);
  const iOf2 = slice1.indexOf('"');

  const vid = validURL(slice1.slice(0, iOf2));

  const slice2 = slice1.slice(iOf2);
  const iOf3 = slice2.indexOf('src="');
  const slice4 = slice2.slice(iOf3 + 5);
  const iOf4 = slice4.indexOf('"');
  const img = validURL(slice4.slice(0, iOf4));

  return { vid, img };
};

export const getVideoURL = (videos) => {
  const result = [];
  for (const { embed } of videos.value) {
    const info = getSrc(embed);
    result.push(info);
  }
  return result;
};

const makeOptionForSelect = (arr) => {
  const result = [];
  for (const value of arr) {
    result.push({ name: value });
  }
  return result;
};

export const makeValidOptions = (obj) => {
  const result = {};
  for (const key in obj) {
    const arr = obj[key];
    const newArr = makeOptionForSelect(arr);
    result[key] = newArr;
  }
  return result;
};

export const formatAnimalTypes = (data) => {
  const type = [];
  const result = {};
  for (const key in data) {
    const value = data[key];
    const { name } = value;
    type.push({ name });
    result[name] = {};
    for (const key2 in value) {
      const val = value[key2];
      if (Array.isArray(val) && val.length) {
        result[name][key2] = makeOptionForSelect(val);
      }
    }
  }
  return { ...result, type };
};

const replaceQueryArr = Object.keys(replaceQuery);

const arrayToQuery = (arr, type) => {
  let result = "";
  if (!arr.length) return result;
  result += `&${type.toLowerCase()}=`;
  for (const item of arr) {
    result += `${encodeURIComponent(item.name.toLowerCase())},`;
  }
  result = result.slice(0, result.length - 1);
  return result;
};

const replaceQueryValueArr = Object.keys(replaceQueryValue);

export const formatQueryValue = ({ name }) => {
  const needToBeReplaced = replaceQueryValueArr.includes(name);
  const value = needToBeReplaced ? replaceQueryValue[name] : name.toLowerCase();
  return encodeURIComponent(value);
};

export const getQuery = (filter, name) => {
  if (!filter && !name) return "";
  let result = "";
  for (const type in filter.value) {
    const value = filter.value[type];
    const newType = replaceQueryArr.includes(type) ? replaceQuery[type] : type;
    const query = Array.isArray(value)
      ? arrayToQuery(value, newType)
      : value
      ? `&${newType.toLowerCase()}=${formatQueryValue(value)}`
      : "";
    result += query;
  }

  if (name && name.value) result += `&name=${encodeURIComponent(name.value)}`;

  console.log(result);
  return result;
};

export const formatBreeds = (breeds) => {
  const result = [];
  for (const { name } of breeds) {
    result.push({ name });
  }
  return result;
};

export const getPetsId = (data) => {
  const result = [];
  for (const { id } of data) {
    result.push(id);
  }
  return result;
};
