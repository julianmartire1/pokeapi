import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: () => import("./pages/Welcome.vue"),
  },
  {
    path: "/pokemons",
    component: () => import("./components/Layout.vue"),
    children: [
      {
        path: "",
        name: "PokemonList",
        component: () => import("./pages/PokemonList.vue"),
      },
      {
        path: "/favorites",
        name: "favorites",
        component: () => import("./pages/Favorites.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
