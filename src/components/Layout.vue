<template>
  <div class="layout">
    <main>
      <div class="container"><router-view /></div>
    </main>
    <footer>
      <div class="actions">
        <router-link
          class="btn secondary block"
          exactActiveClass="active"
          to="/pokemons"
          tag="button"
        >
          <ListIcon /> All
        </router-link>
        <router-link
          class="btn secondary block"
          exactActiveClass="active"
          to="/favorites"
          tag="button"
        >
          <StarIcon /> Favorites
        </router-link>
      </div>
    </footer>
  </div>
</template>

<script>
import ListIcon from "../icons/ListIcon.vue";
import StarIcon from "../icons/StarIcon.vue";

export default {
  name: "Layout",
  components: {
    ListIcon,
    StarIcon,
  },
};
</script>

<style scoped lang="scss">
@import "@/variables.scss";
.layout {
  display: grid;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  grid-template-areas: "main" "footer";
  grid-template-rows: 1fr;
  grid-template-columns: 1fr auto;

  main {
    grid-area: main;
    overflow-y: scroll;

    .container {
      max-width: 570px;
      width: 100%;
      margin: 0 auto;
      padding-bottom: 20px;
      height: 100%;

      @media screen and (max-width: 570px) {
        padding: 0 30px;
      }
    }
  }

  footer {
    grid-area: footer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    background-color: white;
    box-shadow: 0px -5px 4px 0px #0000000d;

    .actions {
      max-width: 570px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      gap: 20px;

      @media screen and (max-width: 570px) {
        padding: 0 30px;
      }

      .active {
        background-color: $red;
      }
    }
  }
}
</style>
