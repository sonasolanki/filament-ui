import { h } from '@stencil/core';
import { Doc } from './docs.mdx';
//import { action } from '@storybook/addon-actions';

export default {
  title: 'template-component',
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

const Template = (args) => <template-component></template-component>;

export const Default = Template.bind({});
Default.storyName = 'Default';

//window.addEventListener('eventName', (e) => action('eventName')(e.detail));
