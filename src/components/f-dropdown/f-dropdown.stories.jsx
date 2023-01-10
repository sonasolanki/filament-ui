import { h } from '@stencil/core';
import { Doc } from './docs.mdx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'input/dropdown',
  args: {
    labelText: 'Dropdown label text',
    items: [
      { name: 'Kiehn, Williamson and Osinski', selected: true, disabled: false, uuid: '1'},
      { name: 'Balistreri-Turcotte', selected: false, disabled: true, uuid: '2'},
      { name: 'Hand Inc', selected: true, disabled: true, uuid: '3'},
      { name: 'Bergnaum-Schinner', selected: false, disabled: false, uuid: '4' },
      { name: 'Becker Inc', selected: false, disabled: false, uuid: '5' },
      { name: 'Skiles-Gutkowski', selected: false, disabled: false, uuid: '6' },
      { name: 'Keebler, Mayert and Leannon', selected: false, disabled: false, uuid: '7' },
      { name: 'Gislason-Gislason', selected: false, disabled: false, uuid: '8' },
      { name: 'Rempel, Mills and Kunde', selected: false, disabled: false, uuid: '9' },
      { name: 'Ortiz-Ortiz', selected: false, disabled: false, uuid: '10' },
      { name: "Bogisich-O'Hara", selected: false, disabled: false, uuid: '11' },
      { name: 'Schoen-Reynolds', selected: false, disabled: false, uuid: '12' },
      { name: 'Frami-Gleichner', selected: false, disabled: false, uuid: '13' },
      { name: 'Stamm and Sons', selected: false, disabled: false, uuid: '14' },
      { name: 'Cartwright-Boyle', selected: false, disabled: false, uuid: '15' },
    ],
    placeholder: 'Select an item',
    multiple: false,
    listDirection: 'down',
    listSize: 7,
    errorMessage: undefined
  },
  argTypes: {
    errorMessage: {
      control: { type: 'text' }
    }
  },
  parameters: {
    docs: {
      page: Doc
    },
    status: {
      type: 'new',
    }
  }
};

const Template = (args) => <f-dropdown {...args}></f-dropdown>;

export const Default = Template.bind({});
Default.storyName = 'Default';

window.addEventListener('dropdownItemSelected', (e) => action('dropdownItemSelected')(e.detail));
