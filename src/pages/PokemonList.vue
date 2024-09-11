<template>
  <section class="pokemon-list">
    <div v-if="loading" class="spinner"><Spinner /></div>

    <div v-if="!loading">
      <Search v-model="searchQuery" @input="onInput" ref="search" />
      <ListPokemons
        v-if="!error"
        :pokemons="pokemons"
        :viewPokemon="viewPokemon"
      />
      <Empty v-else :action="reset" />
    </div>
  </section>

  <Modal v-model="isModalVisible" />
</template>

<script>
import { usePokemonStore } from "@/store/pokemonStore";
import { computed, onMounted, ref } from "vue";
import Spinner from "@/components/Spinner.vue";
import SearchIcon from "@/icons/SearchIcon.vue";
import StarIcon from "@/icons/StarIcon.vue";
import ListPokemons from "../components/ListPokemons.vue";
import Search from "../components/Search.vue";
import Empty from "../components/Empty.vue";
import Modal from "../components/Modal.vue";

export default {
  components: {
    Spinner,
    SearchIcon,
    StarIcon,
    ListPokemons,
    Search,
    Empty,
    Modal,
  },
  setup() {
    const pokemonStore = usePokemonStore();
    const searchQuery = "";
    const debounceTimeout = null;

    const pokemons = computed(() => pokemonStore.pokemons);
    const loading = computed(() => pokemonStore.loading);
    const error = computed(() => pokemonStore.error);
    const isFavorite = pokemonStore.isFavorite;
    const toggleFavorite = pokemonStore.toggleFavorite;
    const isModalVisible = ref(false);

    onMounted(() => {
      pokemonStore.fetchPokemons();
    });

    return {
      pokemonStore,
      pokemons,
      loading,
      error,
      isFavorite,
      toggleFavorite,
      searchQuery,
      debounceTimeout,
      isModalVisible,
    };
  },
  methods: {
    viewPokemon(pokemon) {
      this.openModal();
      this.pokemonStore.getPokemon(pokemon.name);
    },
    onInput() {
      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
      }

      this.debounceTimeout = setTimeout(() => {
        const searchAll = this.searchQuery.trim() === "";
        console.log(searchAll);

        if (searchAll) {
          this.pokemonStore.fetchPokemons();
          return;
        }
        this.pokemonStore.searchPokemon(this.searchQuery.trim());
      }, 500);
    },
    reset() {
      this.searchQuery = "";
      this.pokemonStore.fetchPokemons();
    },
    openModal() {
      this.isModalVisible = true;
    },
  },
  watch: {
    loading(value) {
      if (!value) {
        console.log(this.$refs.search);

        this.$nextTick(() => this.$refs.search.focusInput());
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.pokemon-list {
  width: 100%;
  height: 100%;

  .spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}
</style>
