import { h } from '@stencil/core';
import { Doc } from './docs.mdx';

export default {
  title: 'display/info card',
  args: {
    headerText: 'Info card header',
    callToAction: {
      text: 'call to action link text',
      url: '/'
    },
    imageUrl: undefined,
    imageAltText: undefined,
    imageText: undefined,
    imageText: 'This is the image text',
    text: 'This is the text',
    glowBackground: undefined
  },
  argTypes: {
    callToAction: {
      control: { type: 'object' }
    },
    avatar: {
      control: { type: 'object' }
    },
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

const Template = (args) => <f-info-card {...args}></f-info-card>;

export const Default = Template.bind({});
Default.storyName = 'Default';
