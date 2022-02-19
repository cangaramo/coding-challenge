<template>
  <form class="form" @submit.prevent="submitForm">
    <form-item v-model="interest.fullName" label="Full Name" placeholder="Your full name"></form-item>
    <form-item v-model="interest.movie" label="Favourite Movie" placeholder="Your favourite movie"></form-item>
    <form-item v-model="interest.book" label="Favourite Book" placeholder="Your favourite book"></form-item>
    <simple-button class="form__button" nativeType="submit">Submit</simple-button>
  </form>
</template>

<script>
import FormItem from '@/components/FormItem.vue';
import SimpleButton from '@/components/SimpleButton.vue';

export default {
  data() {
    return {
      interest: {
        fullName: '',
        movie: '',
        book: '',
      },
    };
  },
  components: {
    FormItem,
    SimpleButton,
  },
  methods: {
    submitForm() {
      console.log('Interest has been updated');
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__button {
    margin-top: 15px;
  }
}
</style>
