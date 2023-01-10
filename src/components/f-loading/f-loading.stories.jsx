import { h } from '@stencil/core';
import { Doc } from './docs.mdx';

export default {
  title: 'status/loading',
  args: {
    variant: 'spinner',
    size: 'small',
    inverted: false
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

const Template = (args) => <f-loading {...args}></f-loading>;

export const Default = Template.bind({});
Default.storyName = 'Default';
