<template>
  <div class="form-item">
    <div class="form-item__header">
      <p class="form-item__header__title">{{ label }}</p>
      <button type="button" v-if="!isEditable" @click="isEditable = !isEditable">Edit</button>
      <button type="button" v-else @click="isEditable = !isEditable">Close</button>
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
  data() {
    return {
      isEditable: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.form-item {
  display: block;
  text-align: center;
  width: 350px;
  background: #c6caed;
  border-radius: 10px;
  padding: 18px;
  margin: 10px 0;
  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
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
