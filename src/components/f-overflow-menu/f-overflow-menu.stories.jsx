import { h } from '@stencil/core';
import { Doc } from './docs.mdx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'interaction/overflow menu',
  args: {
    variant: 'action',
    overflowItems: [
      { name: 'overflow item 1', selected: false },
      { name: 'overflow item 2', selected: false }
    ],
    overflowText: 'overflow text',
    overflowIconConfig: {
      iconName: 'bullhorn',
      iconType: 'fal'
    },
    inContainer: false,
    isIconOnly: false
  },
  argTypes: {
    variant: {
      options: [ 'action','progressive' ],
      control: { type: 'select' }
    },
  },
  parameters: {
    docs: {
      page: Doc
    },
    status: {
      type: 'new'
    }
  }
};

const Template = (args) => <f-overflow-menu {...args}></f-overflow-menu>;

export const Default = Template.bind({});
Default.storyName = 'Default';

window.addEventListener('overflowItemSelected', (e) => action('overflowItemSelected')(e.detail));
