import { configure, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

configure(require.context('../src/components', true, /\.stories\.js$/), module);

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...MINIMAL_VIEWPORTS,
    },
    defaultViewport: 'responsive',
  },
  darkMode: {
    dark: { appBg: 'black' },
    light: { appBg: 'white' },
  },
});
