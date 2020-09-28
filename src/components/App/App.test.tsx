import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders a title and message', () => {
  const { getByText } = render(<App />);
  const welcome = getByText(/Welcome/i);
  const hello = getByText(/Hello, Typescript!/i);

  expect(welcome).toBeInTheDocument();
  expect(hello).toBeInTheDocument();
});
