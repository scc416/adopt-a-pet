import DogIcon from "vue-material-design-icons/Dog.vue";
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
