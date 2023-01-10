import { h } from '@stencil/core';
import { Doc } from './docs.mdx';

export default {
  title: 'interaction/accordion item',
  args: {
    text: 'Accordion Item',
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

const Template = (args) => <f-accordion-item {...args}>Accordion item content</f-accordion-item>;

export const Default = Template.bind({});
Default.storyName = 'Default';
