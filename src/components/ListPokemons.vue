<template>
  <ul class="list">
    <li
      class="list-item"
      v-for="pokemon in pokemons"
      :key="pokemon.name"
      @click="viewPokemon(pokemon)"
    >
      <span>{{ pokemon.name }}</span>
      <button
        :class="{
          favorite: true,
          'favorite--active': isFavorite(pokemon.name),
        }"
        @click.stop="toggleFavorite(pokemon)"
      >
        <StarIcon />
      </button>
    </li>
  </ul>


</template>

<script setup>
import { usePokemonStore } from "@/store/pokemonStore";
import StarIcon from "@/icons/StarIcon.vue";

const props = defineProps({
  pokemons: Array,
  viewPokemon: Function,
});

const pokemonStore = usePokemonStore();

const toggleFavorite = pokemonStore.toggleFavorite;

const isFavorite = pokemonStore.isFavorite;
</script>

<style scoped lang="scss">
@import "@/variables.scss";
.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 40px;
  list-style: none;
  padding-bottom: 20px;

  &-item {
    cursor: pointer;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    display: flex;
    height: 60px;
    background-color: white;
    border-radius: 5px;
    padding: 0 10px 0 20px;

    span {
      font-size: 22px;
      font-weight: 500;
      line-height: 26.4px;
      text-align: left;
      color: $black;
      text-transform: capitalize;
    }
  }
}
</style>
