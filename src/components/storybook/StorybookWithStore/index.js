import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'store';

const ProviderWrapper = ({ children, store }) => <Provider store={store}>{children}</Provider>;

const store = configureStore();

const withProvider = story => <ProviderWrapper store={store}>{story()}</ProviderWrapper>;

export default withProvider;
