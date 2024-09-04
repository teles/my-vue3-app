import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import MyButton from './MyButton.vue';

describe('MyButton.vue', () => {
  it('renders the correct label', () => {
    const wrapper = shallowMount(MyButton, {
      props: { label: 'Click Me' }, // Passa a prop label corretamente
    });

    expect(wrapper.text()).toBe('Click Me'); // Verifica se o texto renderizado está correto
  });
});
