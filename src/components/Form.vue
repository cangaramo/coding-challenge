<template>
  <form class="form">
    <form-item label="Full Name"></form-item>
    <form-item label="Favourite Movie"></form-item>
  </form>
</template>

<script>
import FormItem from '@/components/FormItem.vue';

export default {
  components: {
    FormItem,
  },
};
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
