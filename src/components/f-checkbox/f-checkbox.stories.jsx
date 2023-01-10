import { h } from '@stencil/core';
import { Doc } from './docs.mdx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'input/checkbox',
  args: {
    checked: false,
    disabled: false,
    errorMessage: undefined,
    labelText: 'Checkbox label',
    initialValue: 'checkboxButtonValue'
  },
  argTypes: {
    errorMessage: {
      control: {type: 'text'}
    },
    initialValue: {
      control: {type: 'text'}
    },
  },
  parameters: {
    docs: {
      page: Doc
    },
    status: {
      type: 'released',
    }
  }
};

const Template = (args) => <f-checkbox {...args}></f-checkbox>;

export const Default = Template.bind({});
Default.storyName = 'Default';

window.addEventListener('checkboxChecked', (e) => action('checkboxChecked')(e.detail));
