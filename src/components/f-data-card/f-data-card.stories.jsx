import { h } from '@stencil/core';
import { Doc } from './docs.mdx';

export default {
  title: 'display/data card',
  args: {
    glowBackground: undefined
  },
  argTypes: {
    glowBackground: {
      control: { type: 'text' }
    }
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

const Template = (args) => <f-data-card {...args}><h3>Data card header</h3><p>Data card content</p></f-data-card>;

export const Default = Template.bind({});
Default.storyName = 'Default';
