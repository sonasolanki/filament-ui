import { h } from '@stencil/core';
import { Doc } from './docs.mdx';

export default {
  title: 'interaction/accordion',
  parameters: {
    docs: {
      page: Doc
    },
    status: {
      type: 'new'
    }
  }
};

const Template = () =>
  (
    <f-accordion>
      <f-accordion-item text="Accordion item 1">
        Accordion item 1 content
      </f-accordion-item>
      <f-accordion-item text="Accordion item 2">
        Accordion item 2 content
      </f-accordion-item>
      <f-accordion-item text="Accordion item 3">
        Accordion item 3 content
      </f-accordion-item>
    </f-accordion>
  );

export const Default = Template.bind({});
Default.storyName = 'Default';
