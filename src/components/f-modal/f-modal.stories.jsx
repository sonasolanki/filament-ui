import { h } from '@stencil/core';
import { Doc } from './docs.mdx';

export default {
  title: 'feedback/modal',
  args: {
    hasClose: true,
    closeText: 'close',
    position: 'center',
    visible: true,
    size: 'custom',
    variant: 'dialog',
    headerText: 'Modal header text',
    buttons: [
      { text: 'Button', variant: 'regressive', type: 'button', callback: () => console.log('cancel clicked') },
      { text: 'Button', variant: 'action', type: 'submit', callback: () => console.log('submit clicked') },
    ],
  },
  argTypes: {
    variant: {
      options: [ 'dialog','drawer' ],
      control: { type: 'select' }
    },
    position: {
      options: [ 'center','left','right','bottom','top','top-right','top-left','bottom-left','bottom-right' ],
      control: { type: 'select' }
    },
    size: {
      options: [ 'small','medium','large','custom' ],
      control: { type: 'select' }
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

const Template = (args) => <f-modal {...args}>Modal content</f-modal>;
const AlertTemplate = (args) => (
  <f-modal {...args}>
    <f-alert slot="alert" in-container="true">This is alert content</f-alert>
    Modal content
  </f-modal>
);

export const Default = Template.bind({});
Default.storyName = 'Default';

export const ModalWithAlert = AlertTemplate.bind({});
ModalWithAlert.storyName = 'with Alert';
