import { h } from '@stencil/core';
import { Doc } from './docs.mdx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'interaction/button group',
  args: {
    items: [
      { name: 'Button group item 1', selected: false }
    ],
    size: 'default',
    disabled: false
  },
  argTypes: {
    size: {
      options: ['default', 'small'],
      control: { type: 'select' }
    }
  },
  parameters: {
    docs: {
      page: Doc
    },
    status: {
      type: 'future release'
    }
  }
};

const Template = (args) => <f-button-group {...args}></f-button-group>;

export const Default = Template.bind({});
Default.storyName = 'Default';

window.addEventListener('buttonGroupItemSelected', (e) => action('buttonGroupItemSelected')(e.detail));
