import { h } from '@stencil/core';
import { Doc } from './docs.mdx';

export default {
  title: 'display/rating',
  args: {
    rating: '2'
  },
  parameters: {
    docs: {
      page: Doc
    },
    status: {
      type: 'deprecated',
    }
  }
};

const Template = (args) => <f-rating {...args}></f-rating>;

export const Default = Template.bind({});
Default.storyName = 'Default';
