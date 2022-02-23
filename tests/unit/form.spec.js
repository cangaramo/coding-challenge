import Vuelidate from 'vuelidate';
import { mount } from '@vue/test-utils';
import Form from '@/components/Form.vue';
import Vue from 'vue';
// import flushPromises from 'flush-promises';

Vue.use(Vuelidate);

describe('Form', () => {
  /* Solution 1:
    Use done in combination with $nextTick to ensure
    any promises are settled before the assertion is made.
  */
  it('Shows message when form is submitted', async (done) => {
    // Mount component
    const wrapper = mount(Form);
    // Add data
    await wrapper.setProps({ mockSuccess: true });
    await wrapper.setData({
      interest: {
        fullName: 'Clarisa Angaramo',
        movie: 'Back to The Future',
        book: 'Harry Potter',
      },
    });
    // Mock method
    const mockMethod = jest.fn();
    wrapper.vm.mockUpdateInterest = mockMethod;
    // Trigger the button
    await wrapper.find('.form').trigger('submit.prevent');

    // Check message is shown
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.form__message').text()).toBe('Interest has been updated successfully.');
      done();
    });
  });

  /* Solution 2
    Use flush-promises package to flush all pending resolved promise handlers
  */
  /*
  it('Shows message when form is submitted', async () => {
    // Mount component
    const wrapper = mount(Form);
    // Add data
    await wrapper.setProps({ mockSuccess: true });
    await wrapper.setData({
      interest: {
        fullName: 'Clarisa Angaramo',
        movie: 'Back to The Future',
        book: 'Harry Potter',
      },
    });
    // Mock method
    const mockMethod = jest.fn();
    wrapper.vm.mockUpdateInterest = mockMethod;
    // Trigger the button
    await wrapper.find('.form').trigger('submit.prevent');

    // Check message is shown
    await flushPromises();
    expect(wrapper.find('.form__message').text()).toBe('Interest has been updated successfully.');
  }); */
});
