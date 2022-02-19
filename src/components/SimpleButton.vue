<template>
  <button
    @click="$emit('click')"
    :type="nativeType"
    :class="['simple-button', `simple-button--${size}`, { 'is-loading' : loading }]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    loading: Boolean,
    nativeType: {
      type: String,
      default: 'button',
      validator: (value) => ['button', 'submit', 'reset'].indexOf(value) >= 0, // only 3 values possible 'button', 'submit' or 'reset'
    },
    size: {
      type: String,
      default: 'medium',
      validator: (val) => ['small', 'medium'].indexOf(val) >= 0,
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
  &--small {
    padding: 8px 16px;
    font-size: 14px;
  }
  &--medium {
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 600;
  }
  &.is-loading {
    color: transparent!important;
    pointer-events: none;
    position: relative;
    &:after {
      animation: spinAround .5s infinite linear;
      border: 2px solid #dbdbdb;
      border-radius: 50%;
      border-right-color: transparent;
      border-top-color: transparent;
      content: "";
      display: block;
      height: 1em;
      width: 1em;
      position: absolute;
      left: calc(50% - 0.5em);
      top: calc(50% - 0.5em);
    }
  }
  &:hover {
    background: $medium_blue;
  }
}
@keyframes spinAround {
  from {
    -webkit-transform: rotate(0);
    transform: rotate(0)
  }
  to {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg)
  }
}
</style>
