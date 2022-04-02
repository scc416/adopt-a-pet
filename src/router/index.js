import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PetsView from "../views/PetsView.vue";
import ErrorView from "../views/ErrorView";

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
    component: PetsView,
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
