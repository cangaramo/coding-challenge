<template>
  <div class="form-item">
    <div class="form-item__header">
      <p class="form-item__header__title">{{ label }}</p>
      <simple-button
        v-if="!isEditable"
        size="small"
        @click="editField"
        :disabled="disabled">
        Edit
      </simple-button>
      <close-button v-else @click="closeField"/>
    </div>
    <div class="form-item__body">
      <input
        ref="field"
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
import EventBus from '@/helpers/EventBus';

export default {
  props: {
    value: String,
    label: String,
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false,
    },
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
  methods: {
    editField() {
      this.isEditable = true;
      const input = this.$refs.field;
      this.$nextTick(() => input.focus());
    },
    closeField() {
      this.isEditable = false;
    },
  },
  created() {
    EventBus.$on('close-fields', this.closeField);
  },
  beforeDestroy() {
    EventBus.$off('close-fields');
  },
};
</script>

<style lang="scss" scoped>
.form-item {
  display: block;
  text-align: center;
  width: 350px;
  background: $light_purple;
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
      color: $blue;
      font-weight: 800;
      font-size: 18px;
    }
    button {
      display: flex;
    }
  }
  &__body {
    input {
      width: -webkit-fill-available;
      border: none;
      padding: 8px 12px;
      border-radius: 10px;
      font-weight: 500;
      color: $dark_blue;
      &:disabled {
        background: transparent;
        padding-left: 0;
      }
      &:not([disabled]) {
        outline: 1px solid $blue;
        box-shadow: 0 0 6px 1px rgb(66 83 255 / 45%);
      }
      &::placeholder {
        color: #9a9db5;
        font-weight: 400;
      }
    }
  }
}
</style>
