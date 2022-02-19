<template>
  <button class="close-button" @click="$emit('click')" type="button">
    <img class="close-button__img" :src="logoSvg" />
  </button>
</template>

<script>
import logoSvg from '@/assets/icons/close_icon.svg';

export default {
  data() {
    return {
      logoSvg,
    };
  },
};
</script>

<style lang="scss" scoped>
.close-button {
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  &__img {
    height: 20px;
    width: 20px;
  }
}
</style>
