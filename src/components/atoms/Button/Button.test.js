import React from 'react';
import { mount } from 'enzyme';
import Button from './index';

export const tests = describe('App', () => {
  it('renders the inner Counter', () => {
    const wrapper = mount(<Button>Test123</Button>);
    expect(wrapper.text()).toEqual('Test');
  });
});
