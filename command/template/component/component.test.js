import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import __COMPONENT_NAME__ from './';

describe('Button', () => {
  afterEach(cleanup);
  it('Input your error message', () => {
    // eslint-disable-next-line react/jsx-pascal-case
    const { getByTestId, getByText, container } = render(<__COMPONENT_NAME__>__COMPONENT_NAME__</__COMPONENT_NAME__>);
    expect(getByText('__COMPONENT_NAME__').textContent).toBe('__COMPONENT_NAME__');
  });
});
