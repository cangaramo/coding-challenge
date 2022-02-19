<template>
  <button @click="$emit('click')" :type="nativeType" class="simple-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    nativeType: {
      type: String,
      default: 'button',
      validator: (value) => ['button', 'submit', 'reset'].indexOf(value) >= 0, // only 3 values possible 'button', 'submit' or 'reset'
    },
  },
};
</script>

<style lang="scss" scoped>
.simple-button {
  border: none;
  background: $blue;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  padding: 8px 16px;
  font-size: 14px;
  &:hover {
    background: $medium_blue;
  }
}
</style>
