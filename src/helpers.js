import DogIcon from "vue-material-design-icons/DogSide.vue";
import CatIcon from "vue-material-design-icons/Cat.vue";
import RabbitIcon from "vue-material-design-icons/Rabbit.vue";

export const getPetIcon = (pet) => {
  switch (pet) {
    case "Dog":
      return DogIcon;
    case "Cat":
      return CatIcon;
    default:
      return RabbitIcon;
  }
};

export const getBreed = ({mixed, primary, secondary}) => {
  if (!mixed) return primary;
  return `${primary} & ${secondary} Mix`;
}