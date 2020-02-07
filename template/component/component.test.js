import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import COMPONENT_NAME from './';

describe('Button', () => {
  afterEach(cleanup);
  it('Input your error message', () => {
    // eslint-disable-next-line react/jsx-pascal-case
    const { getByTestId, getByText, container } = render(<COMPONENT_NAME>COMPONENT_NAME</COMPONENT_NAME>);
    expect(getByText('COMPONENT_NAME').textContent).toBe('COMPONENT_NAME');
  });
});
