<template>
  <div class="toggle">
    <input :value="value" @input="$emit('input', $event.target.checked)" type="checkbox" :id="id" />
    <label class="label" :for="id"></label>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean,
    id: String,
  },
};
</script>

<style lang="scss" scoped>
.toggle {
  width: 50px;
  height: 25px;
  input {
    display: none;
  }
  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 50px;
    height: 25px;
    background: #b4b4b4;
    display: block;
    border-radius: 25px;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      top: 3px;
      left: 4px;
      width: 18px;
      height: 18px;
      background: #fff;
      border-radius: 20px;
      transition: 0.3s;
    }
    &:active {
      &:after {
        width: 32px;
      }
    }
  }
  input:checked ~ label {
    background: $blue;
  }
  input:checked ~ label:after {
    left: calc(100% - 4px);
    transform: translateX(-100%);
  }
}
</style>
