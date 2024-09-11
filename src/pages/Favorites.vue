<template>
  <section class="pokemon-list">
    <Search v-model="searchQuery" @input="onInput" ref="search" />

    <ListPokemons
      v-if="favoritesFiltered.length"
      :pokemons="favoritesFiltered"
      :viewPokemon="viewPokemon"
    />

    <Empty v-else />

    <Modal v-model="isModalVisible" />
  </section>
</template>

<script>
import { usePokemonStore } from "@/store/pokemonStore";
import ListPokemons from "../components/ListPokemons.vue";
import { computed, ref } from "vue";
import Search from "../components/Search.vue";
import Empty from "../components/Empty.vue";
import Modal from "../components/Modal.vue";

export default {
  components: {
    ListPokemons,
    Search,
    Empty,
    Modal,
  },
  setup() {
    const pokemonStore = usePokemonStore();
    const searchQuery = ref("");

    const favorites = computed(() => pokemonStore.favorites);
    const favoritesFiltered = computed(() =>
      favorites.value.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    );
    const isModalVisible = ref(false);

    return {
      searchQuery,
      favoritesFiltered,
      favorites,
      isModalVisible,
      getPokemon: pokemonStore.getPokemon,
    };
  },
  methods: {
    viewPokemon(pokemon) {
      this.openModal();
      this.getPokemon(pokemon.name);
    },
    openModal() {
      this.isModalVisible = true;
    },
  },
};
</script>

<style scoped lang="scss">
.pokemon-list {
  width: 100%;
  height: 100%;
}
</style>
