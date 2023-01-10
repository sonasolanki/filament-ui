import { h } from '@stencil/core';
import { Doc } from './docs.mdx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'interaction/button',
  args: {
    disabled: false,
    hasLoader: false,
    iconConfig: undefined,
    size: 'medium',
    text: 'Button text',
    type: 'button',
    variant: 'progressive',
  },
  argTypes: {
    variant: {
      options: [ 'action','destructive','ghost','progressive','regressive','naked' ],
      control: { type: 'select' }
    },
    type: {
      options: [ 'button','reset','submit' ],
      control: { type: 'select' }
    },
    size: {
      options: [ 'small','medium','large' ],
      control: { type: 'select' }
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

const Template = (args) => <f-button {...args}></f-button>;

export const Default = Template.bind({});
Default.storyName = 'Default';

window.addEventListener('buttonClicked', (e) => action('buttonClicked')(e.detail));
