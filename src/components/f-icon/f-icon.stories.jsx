import { h } from '@stencil/core';
import { Doc } from './docs.mdx';

export default {
  title: 'display/icon',
  args: {
    iconConfig: {
      iconName: 'bullhorn',
      iconType: 'fal'
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

const Template = (args) => <f-icon {...args}></f-icon>;

export const Default = Template.bind({});
Default.storyName = 'Default';
