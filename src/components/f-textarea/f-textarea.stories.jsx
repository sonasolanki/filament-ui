import { h } from '@stencil/core';
import { Doc } from './docs.mdx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'input/textarea',
  args: {
   disabled: false,
   errorMessage: undefined,
   helperText: 'Textarea helper text',
   errorMessage: undefined,
   labelText: 'Textarea label text',
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

const Template = (args) => <f-textarea {...args}></f-textarea>;

export const Default = Template.bind({});
Default.storyName = 'Default';

window.addEventListener('textareaChanged', (e) => action('textareaChanged')(e.detail));
window.addEventListener('textareaFocused', (e) => action('textareaFocused')(e.detail));
window.addEventListener('textareaBlur', (e) => action('textareaBlur')(e.detail));
