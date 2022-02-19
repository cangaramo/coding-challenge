<template>
  <div class="form-item">
    <div class="form-item__header">
      <p class="form-item__header__title">{{ label }}</p>
      <simple-button type="button" v-if="!isEditable" @click="isEditable = !isEditable">Edit</simple-button>
      <close-button type="button" v-else @click="isEditable = !isEditable"/>
    </div>
    <div class="form-item__body">
      <input
        type="text"
        :value="value"
        @input="$emit('input', $event.target.value)"
        :placeholder="placeholder"
        :disabled="!isEditable">
    </div>
  </div>
</template>

<script>
import SimpleButton from '@/components/SimpleButton.vue';
import CloseButton from '@/components/CloseButton.vue';

export default {
  props: {
    value: String,
    label: String,
    placeholder: String,
  },
  data() {
    return {
      isEditable: false,
    };
  },
  components: {
    SimpleButton,
    CloseButton,
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
    min-height: 33px;
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
      &:disabled {
        background: transparent;
        padding-left: 0;
      }
      &:not([disabled]) {
        outline: 1px solid #4353ff;
        box-shadow: 0 0 6px 1px rgb(66 83 255 / 45%);
      }
    }
  }
}
</style>
