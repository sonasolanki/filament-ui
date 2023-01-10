import { h } from '@stencil/core';
import { Doc } from './docs.mdx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'navigation/breadcrumb',
  args: {
    breadcrumbItems: [
      { name: 'Breadcrumb item 1', url: '/' },
      { name: 'Breadcrumb item 2', url: '/' },
      { name: 'Breadcrumb item 3', url: '/' },
      { name: 'Breadcrumb Item 4', url: '/' }
    ],
    divider: '/'
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

const Template = (args) => <f-breadcrumb {...args}></f-breadcrumb>;

export const Default = Template.bind({});
Default.storyName = 'Default';

window.addEventListener('breadcrumbSelected', (e) => action('breadcrumbSelected')(e.detail));
