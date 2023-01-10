import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'filament-ui',
  srcDir: 'src',
  outputTargets: [
    {
      type: 'dist',
      copy: [
        { src: 'global/styles/css', dest: 'assets/styles/css' }
      ]
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/global/styles/scss/index.scss']
    }),
  ]
};
