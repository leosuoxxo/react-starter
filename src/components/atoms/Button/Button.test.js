import React from 'react';
import { mount } from 'enzyme';
import Button from './index';

describe('App', () => {
  it('renders the inner Counter23', () => {
    const wrapper = mount(<Button>Test123</Button>);
    expect(wrapper.text()).toEqual('Test123');
  });
});
