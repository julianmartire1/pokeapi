<!-- Modal.vue -->
<template>
  <div class="modal-backdrop" v-if="isVisible">
    <div class="modal">
      <div class="modal-content" v-if="!loading">
        <button class="modal-close" @click="closeModal">
          <CloseIcon />
        </button>
        <div class="modal-image">
          <img
            :src="pokemon.sprites.other['official-artwork'].front_default"
            alt="pokemon-detail"
          />
        </div>
        <div class="modal-info">
          <ul class="modal-list">
            <li class="modal-item"><span>Name:</span> {{ pokemon.name }}</li>
            <li class="modal-item">
              <span>Height:</span> {{ pokemon.height }}
            </li>
            <li class="modal-item">
              <span>Weight:</span> {{ pokemon.weight }}
            </li>
            <li class="modal-item"><span>Types:</span> {{ getTypes() }}</li>
          </ul>
          <div class="modal-actions">
            <button class="btn primary" @click="sharePokemon(pokemon)">
              Share to my friends
            </button>
            <button
              :class="{
                favorite: true,
                'favorite--active': isFavorite(pokemon.name),
              }"
              @click.stop="toggleFavorite(pokemon)"
            >
              <StarIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { usePokemonStore } from "../store/pokemonStore";
import CloseIcon from "../icons/CloseIcon.vue";
import StarIcon from "../icons/StarIcon.vue";
import { sharePokemon } from "../utils";

export default {
  components: {
    CloseIcon,
    StarIcon,
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: "Modal Title",
    },
  },
  emits: ["update:modelValue"],

  setup(props, { emit }) {
    const isVisible = ref(props.modelValue);
    const pokemonStore = usePokemonStore();

    const pokemon = computed(() => pokemonStore.pokemon);
    const loading = computed(() => pokemonStore.loadingDetail);

    const isFavorite = pokemonStore.isFavorite;
    const toggleFavorite = pokemonStore.toggleFavorite;

    const closeModal = () => {
      emit("update:modelValue", false);
    };

    watch(
      () => props.modelValue,
      (newVal) => {
        console.log(newVal);

        isVisible.value = newVal;
      }
    );

    return {
      isVisible,
      pokemon,
      loading,
      closeModal,
      isFavorite,
      toggleFavorite,
      sharePokemon,
    };
  },
  methods: {
    getTypes() {
      return this.pokemon.types.map((type) => type.type.name).join(", ");
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/variables.scss";
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 570px) {
    padding: 0 30px;
  }

  .modal {
    background: white;
    border-radius: 5px;
    width: 100%;
    max-width: 570px;
    border-radius: 5px;
    position: relative;

    &-close {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 26px;
      height: 26px;
      border-radius: 100%;
      border: none;
      background-color: transparent;
      color: white;
      cursor: pointer;
    }

    &-image {
      background-image: url("../assets/background-detail.png");
      background-repeat: no-repeat;
      height: 220px;
      overflow: hidden;
      border-radius: 5px 5px 0 0;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 180px;
        height: auto;
      }
    }

    &-info {
      padding: 10px 30px 20px 30px;
    }

    &-list {
      list-style: none;
    }

    &-item {
      padding: 10px 0;
      border-bottom: 1px solid $grey-3;
      font-size: 18px;
      font-weight: 500;
      line-height: 27px;
      color: $grey;
      text-transform: capitalize;

      span {
        font-weight: 700;
      }
    }

    &-actions {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
