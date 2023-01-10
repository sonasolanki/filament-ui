import { h } from '@stencil/core';
import { Doc } from './docs.mdx';

export default {
  title: 'display/badge',
  args: {
    content: '1',
  },
  parameters: {
    cssprops: {
      '--f-badge-background-color': {
        value: 'hsl(120, 0%, 16%)',
        description: 'background color of badge component'
      },
      '--f-badge-border-color': {
        value: 'hsl(120, 0%, 16%)',
        description: 'border color of badge component'
      },
      '--f-badge-text-color': {
        value: 'hsla(0, 0%, 100%, 1)',
        description: 'text color of badge component'
      },
    },
    docs: {
      page: Doc
    },
    status: {
      type: 'deprecated',
    }
  }
};

const Template = (args) => <f-badge {...args}></f-badge>;

export const Default = Template.bind({});
Default.storyName = 'Default';
