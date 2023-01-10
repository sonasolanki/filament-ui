import { h } from '@stencil/core';
import { Doc } from './docs.mdx';

export default {
  title: 'display/lozenge',
  args: {
    content: 'Lozenge content',
    iconConfig: {iconName: 'bullhorn', iconType: 'fal'}
  },
  argTypes: {
    iconConfig: {
      control: {type: 'object'}
    },
  },
  parameters: {
    cssprops: {
      '--f-lozenge-background-color': {
        value: 'hsl(120, 0%, 16%)',
        description: 'background color of lozenge component'
      },
      '--f-lozenge-border-color': {
        value: 'hsl(120, 0%, 16%)',
        description: 'border color of lozenge component'
      },
      '--f-lozenge-text-color': {
        value: 'var(--neutral-white)',
        description: 'text color of lozenge component'
      },
    },
    docs: {
      page: Doc
    },
    status: {
      type: 'released',
    }
  }
};

const Template = (args) => <f-lozenge {...args}></f-lozenge>;

export const Default = Template.bind({});
Default.storyName = 'Default';
