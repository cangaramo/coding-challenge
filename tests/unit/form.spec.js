import Vuelidate from 'vuelidate';
import { mount } from '@vue/test-utils';
import Form from '@/components/Form.vue';
import Vue from 'vue';

Vue.use(Vuelidate);

describe('Form', () => {
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
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.form__message').text()).toBe('Interest has been updated successfully.');
    });
  });
});
