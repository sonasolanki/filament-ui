import { h } from '@stencil/core';
import { Doc } from './docs.mdx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'navigation/tabs',
  args: {
    items: [
      { name: 'Tab item 1', selected: false, subText: 'Sub text' },
      { name: 'Tab item 2', selected: false, subText: 'Sub text' },
      { name: 'Tab item 3', selected: false, subText: 'Sub text' },
      { name: 'Tab Item 4', selected: false, subText: 'Sub text' }
    ],
    variant: 'horizontal'
  },
  argTypes: {
    variant: {
      options: [ 'horizontal','vertical' ],
      control: { type: 'select' }
    },
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

const Template = (args) => <f-tabs {...args}></f-tabs>;

export const Default = Template.bind({});
Default.storyName = 'Default';

window.addEventListener('tabItemSelected', (e) => action('tabItemSelected')(e.detail));
