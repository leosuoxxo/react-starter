import { configure, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { INITIAL_VIEWPORTS,MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { describe, it } from 'storybook-addon-specifications'
import { configure as enzymeConfigure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect'


// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.js$/), module);
enzymeConfigure({ adapter: new Adapter() })

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...MINIMAL_VIEWPORTS
    },
    defaultViewport: 'responsive'
  },
});



window.describe = describe
window.it = it
window.expect = expect
