<template>
  <div class="interests">
    <h1>✨ My Interests ✨</h1>
    <Form :mockSuccess="!requestFails"></Form>
    <div class="interests__toggle">
      <span>Make it fail</span>
      <toggle v-model="requestFails" id="toggle"></toggle>
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form.vue';
import Toggle from '@/components/Toggle.vue';

export default {
  data() {
    return {
      requestFails: false,
    };
  },
  components: {
    Form,
    Toggle,
  },
};
</script>

<style lang="scss" scoped>
.interests {
  &__toggle {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    span {
      font-weight: 700;
      color: $blue;
    }
  }
}
</style>
