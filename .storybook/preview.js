import { renderVdom, registerHost, getHostRef } from '@stencil/core/internal/client';
import { defineCustomElements } from '../dist/esm/loader';

defineCustomElements();

const rootElement = document.getElementById('root');
const storyRoot = document.createElement('div');
rootElement.parentElement.appendChild(storyRoot);

registerHost(storyRoot, { $flags$: 0, $tagName$: 'story-root' });
const hostRef = getHostRef(storyRoot);

export const decorators = [
  (Story) => {
    renderVdom(hostRef, Story());
    return '<div />';
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  status: {
    statuses: {
      deprecated: {
        background: '#C61A1A',
        color: '#fff',
        description: 'This component is deprecated',
      },
      'future release': {
        background: '#BB6BD9',
        color: '#fff',
        description: 'This component is scheduled for release',
      },
      'in progress': {
        background: '#165BCF',
        color: '#fff',
        description: 'This component is in progress',
      },
      new: {
        background: '#107400',
        color: '#fff',
        description: 'This component has just been released',
      },
      updated: {
        background: '#FBCF35',
        color: '#000',
        description: 'This component has been updated',
      },
      released: {
        background: '#fff',
        color: '#000',
        description: 'This component is current'
      },
      atomic: {
        background: '#97E8E2',
        color: '#000',
        description: 'This component is not for external consumption'
      }
    },
  },
}