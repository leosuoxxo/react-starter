import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
  afterEach(cleanup);
  it('renders the inner Counter23', () => {
    const { getByTestId, getByText, container } = render(<Button>Counter23</Button>);
    expect(getByText('Counter23').textContent).toBe('Counter23');
  });

  it('Counter23 can be clicked', () => {
    let count = 0;
    const clickHanlder = () => (count += 1);
    const { getByTestId, getByText, container } = render(<Button onClick={clickHanlder}>Counter23</Button>);
    fireEvent.click(getByText('Counter23'));
    expect(count).toBe(1);
    fireEvent.click(getByText('Counter23'));
    expect(count).toBe(2);
  });
});
