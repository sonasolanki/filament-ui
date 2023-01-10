import { h } from '@stencil/core';
import { Doc } from './docs.mdx';

export default {
  title: 'display/results card',
  args: {
    headerText: 'Result card header',
    callToAction: {
      text: 'call to action link text',
      url: '/'
    },
    subheaderText: 'This is the text',
    date: '09/01/2022'
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

const Template = (args) => <f-results-card {...args}></f-results-card>;

export const Default = Template.bind({});
Default.storyName = 'Default';
