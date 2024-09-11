<template>
  <div class="empty">
    <h4>Uh-oh!</h4>
    <p>You look lost on your journey!</p>
    <button class="btn primary" @click="action()">Go back home</button>
  </div>
</template>
<script>
export default {
  name: "Empty",
  props: {
    action: Function,
  },
};
</script>
<style scoped lang="scss">
@import "@/variables.scss";
.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  h4 {
    font-size: 36px;
    font-weight: 700;
    line-height: 43.2px;
    text-align: center;
    color: $black;
    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    text-align: center;
    color: $grey;
    margin-bottom: 25px;
  }
}
</style>
