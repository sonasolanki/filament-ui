import { h } from '@stencil/core';
import { Doc } from './docs.mdx';

export default {
  title: 'display/article card',
  args: {
    headerText: 'Article card header',
    callToAction: {
      text: 'call to action link text',
      url: '/'
    },
    imageUrl: undefined,
    imageAltText: undefined,
    imageText: 'This is the image text',
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

const Template = (args) => <f-article-card {...args}></f-article-card>;

export const Default = Template.bind({});
Default.storyName = 'Default';
