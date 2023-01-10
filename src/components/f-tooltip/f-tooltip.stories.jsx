import { h } from '@stencil/core';
import { Doc } from './docs.mdx';

export default {
  title: 'display/tooltip',
  args: {
    position: 'right',
    content: 'this is tooltip content',
    variant: 'info'
  },
  argTypes: {
    variant: {
      options: [ 'info','question' ],
      control: {type: 'select'}
    },
    position: {
      options: [ 'top','right','bottom','left' ],
      control: {type: 'select'}
    },
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

const Template = (args) => (
  <f-tooltip class="flex justify-center mt-xxxl pt-xxxl" {...args}></f-tooltip>
);

export const Default = Template.bind({});
Default.storyName = 'Default';
