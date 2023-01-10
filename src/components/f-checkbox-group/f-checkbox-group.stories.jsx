import { h } from '@stencil/core';
import { Doc } from './docs.mdx';


export default {
  title: 'input/checkbox group',
  args: {
    checkboxGroupName: 'checkbox group name',
    checkboxItems: [
      {    checked: false,
        disabled: false,
        labelText: 'checkbox label one',
        initialValue: 'checkboxButtonValue1',
      uuid: '1'},
        {
          checked: false,
          disabled: false,
          labelText: 'checkbox label two',
          initialValue: 'checkboxButtonValue2',
          uuid: '2'},
    ],
    variant: 'horizontal',
    allowMultiple: false
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

const Template = (args) => <f-checkbox-group {...args}></f-checkbox-group>;

export const Default = Template.bind({});
Default.storyName = 'Default';
