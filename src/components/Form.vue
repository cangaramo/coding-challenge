<template>
  <form class="form">
    <form-item label="Full Name" placeholder="Your full name"></form-item>
    <form-item label="Favourite Movie" placeholder="Your favourite movie"></form-item>
    <form-item label="Favourite Book" placeholder="Your favourite book"></form-item>
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
