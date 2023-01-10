import { h } from '@stencil/core';
import { Doc } from './docs.mdx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'input/text input',
  args: {
    disabled: false,
    errorMessage: undefined,
    helperText: 'Text input helper text',
    initialValue: undefined,
    labelText: 'Text input label text',
    required: false,
    type: 'text',
  },
  argTypes: {
    type: {
      options: [ 'text','password','number','search','tel','email','date','month','week','datetime','time','datetime-local','url' ],
      control: { type: 'select' }
    },
    initialValue: {
      control: {type: 'text'}
    },
    errorMessage: {
      control: {type: 'text'}
    }
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

const Template = (args) => <f-text-input {...args}></f-text-input>;

export const Default = Template.bind({});
Default.storyName = 'Default';

window.addEventListener('inputChanged', (e) => action('inputChanged')(e.detail));
window.addEventListener('inputFocused', (e) => action('inputFocused')(e.detail));
window.addEventListener('inputBlur', (e) => action('inputBlur')(e.detail));
