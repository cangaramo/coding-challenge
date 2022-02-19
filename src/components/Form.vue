<template>
  <form class="form" @submit.prevent="validateForm">
    <!-- Full name -->
    <form-item v-model="interest.fullName" label="Full Name" placeholder="Your full name"/>
    <p class="form__error" v-if="submitted && !$v.interest.fullName.required">Full name is required</p>
    <!-- Movie -->
    <form-item v-model="interest.movie" label="Favourite Movie" placeholder="Your favourite movie" />
    <p class="form__error" v-if="submitted && !$v.interest.movie.required">Movie is required</p>
    <!-- Book -->
    <form-item v-model="interest.book" label="Favourite Book" placeholder="Your favourite book" />
    <p class="form__error" v-if="submitted && !$v.interest.book.required">Book is required</p>
    <!-- Submit -->
    <simple-button class="form__button" nativeType="submit" :loading="loading">Update</simple-button>
    <div v-if="message" :class="[ 'form__message', { 'form__error' : error } ]">
      {{ message }}
    </div>
  </form>
</template>

<script>
import FormItem from '@/components/FormItem.vue';
import SimpleButton from '@/components/SimpleButton.vue';
import EventBus from '@/helpers/EventBus';
import { required } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      interest: {
        fullName: '',
        movie: '',
        book: '',
      },
      mockSuccess: true,
      submitted: false,
      loading: false,
      message: null,
      error: null,
    };
  },
  validations: {
    interest: {
      fullName: { required },
      movie: { required },
      book: { required },
    },
  },
  components: {
    FormItem,
    SimpleButton,
  },
  methods: {
    validateForm() {
      this.submitted = true;
      // Vuelidate validation
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.submitForm();
      }
    },
    async submitForm() {
      this.loading = true;
      EventBus.$emit('close-fields');
      this.message = null;
      this.error = null;
      try {
        await this.mockUpdateInterest();
        this.message = 'Interest has been updated successfully.';
      } catch (e) {
        this.error = true;
        this.message = e.message;
      } finally {
        this.loading = false;
      }
    },
    // Mock promise
    mockUpdateInterest() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (this.mockSuccess) resolve('Interest updated');
          else reject(new Error('Interest couldn\'t be updated'));
        }, 2000);
      });
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
  &__error {
    margin: 2px 0 6px 0;
    font-weight: 500;
    color: $red;
  }
  &__message {
    margin-top: 30px;
    font-weight: 600;
  }
}
</style>
