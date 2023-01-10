import { h } from '@stencil/core';
import { Doc } from './docs.mdx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'feedback/alert',
  args: {
    inContainer: false,
    isDismissable: false,
    variant: 'info'
  },
  argTypes: {
    variant: {
      options: [ 'error','info','success','warning','naked' ],
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

const Template = (args) => <f-alert {...args}>Alert content</f-alert>;

export const Default = Template.bind({});
Default.storyName = 'Default';

window.addEventListener('dismiss', (e) => action('dismiss')(e.detail));
