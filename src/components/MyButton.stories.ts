import MyButton from './MyButton.vue';
import { Meta, StoryFn } from '@storybook/vue3';

// Configurações gerais da história
export default {
  title: 'Example/MyButton',
  component: MyButton,
} as Meta<typeof MyButton>;

// Definindo um template tipado para o componente MyButton
const Template: StoryFn<typeof MyButton> = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<MyButton v-bind="args" />',
});

// Exportando a história padrão
export const Default = Template.bind({});
Default.args = {
  label: 'Click Me',
};
