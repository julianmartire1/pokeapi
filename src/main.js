import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.scss";
import App from "./App.vue";
import router from "./router";
import { usePokemonStore } from "./store/pokemonStore";

const app = createApp(App);
app.use(createPinia());
app.use(router);

const pokemonStore = usePokemonStore();
pokemonStore.loadFavorites();

app.mount("#app");
