import { h } from '@stencil/core';
import { Doc } from './docs.mdx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'feedback/modal header',
  args: {
    modalHeaderCloseText: 'close',
    modalHeaderText: 'Modal header text',
  },
  parameters: {
    docs: {
      page: Doc
    },
    status: {
      type: 'atomic'
    }
  }
};

const Template = (args) => <f-modal-header {...args}></f-modal-header>;

export const Default = Template.bind({});
Default.storyName = 'Default';

window.addEventListener('closeModal', (e) => action('closeModal')(e.detail));
