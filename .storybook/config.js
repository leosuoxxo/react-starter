import { configure, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
// import { describe, it } from 'storybook-addon-specifications';
// import { configure as enzymeConfigure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import expect from 'expect';

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

// window.describe = describe;
// window.it = it;
// window.expect = expect;
