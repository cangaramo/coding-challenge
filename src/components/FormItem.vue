<template>
  <div class="form-item">
    <div class="form-item__header">
      <p class="form-item__header__title">{{ label }}</p>
    </div>
    <div class="form-item__body">
      <input>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
  },
};
</script>

<style lang="scss" scoped>
.form-item {
  margin: 0 auto;
  display: block;
  text-align: center;
  width: 350px;
  background: #c6caed;
  border-radius: 10px;
  padding: 18px;
  &__header {
    margin-bottom: 7px;
    &__title {
      margin: 0;
      color: blue;
      font-weight: 800;
      font-size: 18px;
    }
  }
  &__body {
    input {
      width: -webkit-fill-available;
      border: none;
      padding: 8px 12px;
      border-radius: 10px;
      font-weight: 500;
    }
  }
}
</style>
