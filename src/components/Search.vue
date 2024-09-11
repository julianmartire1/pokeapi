<template>
  <div class="search">
    <SearchIcon class="icon" />
    <input
      type="text"
      placeholder="Search"
      v-model="inputValue"
      @input="onInputHandler"
      ref="searchInput"
    />
  </div>
</template>
<script setup>
import SearchIcon from "../icons/SearchIcon.vue";
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);
const inputValue = ref(props.modelValue);
const searchInput = ref(null);

const onInputHandler = (event) => {
  emit("update:modelValue", event.target.value);
};

const focusInput = () => {
  searchInput.value.focus();
};

defineExpose({
  focusInput,
});

watch(
  () => props.modelValue,
  (newValue) => {
    inputValue.value = newValue;
  }
);
</script>
<style scoped lang="scss">
@import "@/variables.scss";
.search {
  margin-top: 35px;
  position: relative;
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    box-shadow: 0px 2px 10px 0px #0000000a;
    background-color: #ffffff;
    border-radius: 5px;
    border: none;
    padding-left: 43px;
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 22.4px;

    &:focus {
      outline: none;
    }
    &::placeholder {
      color: $grey-2;
    }
  }

  .icon {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    color: $grey-2;
  }
}
</style>
