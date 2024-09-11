<template>
  <div class="welcome">
    <img
      class="welcome-image"
      src="../assets/image-welcome.png"
      alt="Welcome"
    />
    <h1 class="welcome-title">Welcome to Pokédex</h1>
    <p class="welcome-description">
      The digital encyclopedia created by Professor Oak is an invaluable tool to
      Trainers in the Pokémon world.
    </p>
    <router-link to="/pokemons"> <button>Get started</button></router-link>
  </div>
</template>

<script>
export default {
  name: "Welcome",
};
</script>

<style lang="scss" scoped>
@import "@/variables.scss";
.welcome {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 570px;
  margin: 0 auto;
  height: 100vh;

  &-image {
    margin-bottom: 73px;
  }

  &-title {
    font-size: 26px;
    font-weight: 700;
    line-height: 31.2px;
    margin-bottom: 30px;
  }

  &-description {
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    text-align: center;
    margin-bottom: 50px;
  }

  button {
    padding: 11px 20px;
    border-radius: 60px;
    background-color: $red;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 21.6px;
    border: none;
    color: white;
    cursor: pointer;
  }
}
</style>
