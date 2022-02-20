import { mount } from '@vue/test-utils';
import FormItem from '@/components/FormItem.vue';

describe('FormItem', () => {
  it('should render the label', () => {
    // Make sure label prop and title matches
    const expectedLabel = 'Full name';
    const wrapper = mount(FormItem, {
      propsData: {
        label: 'Full name',
      },
    });
    const title = wrapper.find('.form-item__header__title');
    expect(wrapper.props().label).toBe(expectedLabel);
    expect(title.text()).toContain(expectedLabel);
  });

  it('should render the input', () => {
    // Make sure value prop and input value matches
    const expectedValue = 'Clarisa Angaramo';
    const wrapper = mount(FormItem, {
      propsData: {
        value: 'Clarisa Angaramo',
      },
    });
    const input = wrapper.find('input');
    expect(wrapper.props().value).toBe(expectedValue);
    expect(input.element.value).toBe(expectedValue);
  });

  it('should disable/enable form input on edit/close button click', async () => {
    const wrapper = mount(FormItem);
    // Input is disable initally
    const input = wrapper.find('input');
    expect(input.element.disabled).toBe(true);
    // Click 'Edit' button
    await wrapper.find('.simple-button').trigger('click');
    // Input should be editable after
    expect(input.element.disabled).toBe(false);
    // Click 'Close' button
    await wrapper.find('.close-button').trigger('click');
    // Input should be disable again
    expect(input.element.disabled).toBe(true);
  });
});
