import { h } from '@stencil/core';
import { Doc } from './docs.mdx';

export default {
  title: 'display/avatar',
  args: {
    imageText: undefined,
    imageUrl: 'https://fakeimg.pl/136x136/',
    imageAltText: 'user image',
  },
  argTypes: {
    imageText: {
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

const Template = (args) => <f-avatar {...args}></f-avatar>;

export const Default = Template.bind({});
Default.storyName = 'Default';
