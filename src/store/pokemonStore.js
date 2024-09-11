import { defineStore } from "pinia";
import axios from "axios";

axios.defaults.baseURL = "https://pokeapi.co/api/v2";

const loadFavoritesFromLocalStorage = () => {
  const storedFavorites = localStorage.getItem("pokemon-favorites");
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const saveFavoritesToLocalStorage = (favorites) => {
  localStorage.setItem("pokemon-favorites", JSON.stringify(favorites));
};

export const usePokemonStore = defineStore("pokemonStore", {
  state: () => ({
    pokemons: [],
    pokemon: null,
    favorites: loadFavoritesFromLocalStorage(),
    loading: false,
    loadingDetail: false,
    error: false,
    errorDetail: false,
  }),
  getters: {
    isFavorite: (state) => (pokemonName) => {
      return state.favorites.some((pokemon) => pokemon.name === pokemonName);
    },
  },
  actions: {
    async fetchPokemons() {
      this.loading = true;
      this.error = false;
      try {
        const response = await axios.get("/pokemon?limit=100");
        this.pokemons = response.data.results;
      } catch (err) {
        this.pokemons = [];
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
    async searchPokemon(nameOrId, detail = false) {
      this.loading = true;
      this.error = false;
      try {
        const response = await axios.get(`/pokemon/${nameOrId.toLowerCase()}`);
        this.pokemons = [response.data];
      } catch (error) {
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
    async getPokemon(nameOrId) {
      this.loadingDetail = true;
      this.errorDetail = false;
      try {
        const response = await axios.get(`/pokemon/${nameOrId.toLowerCase()}`);
        this.pokemon = response.data;
      } catch (error) {
        this.errorDetail = true;
      } finally {
        this.loadingDetail = false;
      }
    },
    addFavorite(pokemon) {
      this.favorites.push(pokemon);
      saveFavoritesToLocalStorage(this.favorites);
    },
    removeFavorite(pokemon) {
      this.favorites = this.favorites.filter(
        (fav) => fav.name !== pokemon.name
      );
      saveFavoritesToLocalStorage(this.favorites);
    },
    loadFavorites() {
      this.favorites = loadFavoritesFromLocalStorage();
    },
    toggleFavorite(pokemon) {
      this.isFavorite(pokemon.name)
        ? this.removeFavorite(pokemon)
        : this.addFavorite(pokemon);
    },
  },
});
