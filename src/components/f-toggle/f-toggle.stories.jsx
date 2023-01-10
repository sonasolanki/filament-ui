import { h } from '@stencil/core';
import { Doc } from './docs.mdx';
//import { action } from '@storybook/addon-actions';

export default {
  title: 'input/toggle',
  args: {},
  parameters: {
    docs: {
      page: Doc
    },
    status: {
      type: 'future release'
    }
  }
};

const Template = (args) => <f-toggle></f-toggle>;

export const Default = Template.bind({});
Default.storyName = 'Default';

//window.addEventListener('eventName', (e) => action('eventName')(e.detail));
