import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PetsView from "../views/PetsView.vue";
import PetDetailsView from "../views/PetDetailsView";
import ErrorView from "../views/ErrorView";
import SavedView from "../views/SavedView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/pets",
    name: "pets",
    component: PetsView,
  },
  {
    path: "/pets/:id",
    name: "petDetails",
    component: PetDetailsView,
  },
  {
    path: "/saved",
    name: "saved",
    component: SavedView,
  },
  {
    path: "/:catchAll(.*)",
    name: "error",
    component: ErrorView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
