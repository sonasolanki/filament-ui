import { h } from '@stencil/core';
import { Doc } from './docs.mdx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'input/radio',
  args: {
    selected: false,
    disabled: false,
    labelText: 'Radio label',
    initialValue: 'radioButtonValue',
    radioName: undefined,
  },
  argTypes: {
    initialValue: {
      control: {type: 'text'}
    },
    radioName: {
      control: {type: 'text'}
    },
  },
  parameters: {
    docs: {
      page: Doc
    },
    status: {
      type: 'atomic',
    }
  }
};

const Template = (args) => <f-radio {...args}></f-radio>;

export const Default = Template.bind({});
Default.storyName = 'Default';

window.addEventListener('radioSelected', (e) => action('radioSelected')(e.detail));
