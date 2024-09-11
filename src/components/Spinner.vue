<template>
  <img class="spin" src="../assets/pokeball.svg" alt="Loading..." />
</template>

<script>
export default {
  name: "Spinner",
};
</script>

<style scoped>
.spin {
  animation: spin 1s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
