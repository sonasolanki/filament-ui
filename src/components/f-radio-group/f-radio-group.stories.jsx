import { h } from '@stencil/core';
import { Doc } from './docs.mdx';

export default {
  title: 'input/radio group',
  args: {
    radioGroupName: 'Radio group name',
    radioItems: [
      {    selected: false,
        disabled: false,
        labelText: 'Radio label one',
        initialValue: 'radioButtonValue1',
      uuid: '1'},
        {
          selected: false,
          disabled: false,
          labelText: 'Radio label two',
          initialValue: 'radioButtonValue2',
          uuid: '2'},
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
      type: 'future release'
    }
  }
};

const Template = (args) => <f-radio-group {...args}></f-radio-group>;

export const Default = Template.bind({});
Default.storyName = 'Default';
