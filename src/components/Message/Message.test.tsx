import React from 'react';
import { render } from '@testing-library/react';
import Message from './Message';

test('renders Message component', () => {
  const { getByText } = render(
    <Message
      title='Some Title'
      text='Some Text'
    />
  );
  const title = getByText(/Some Title/i);
  const text = getByText(/Some Text/i);

  expect(title).toBeInTheDocument();
  expect(text).toBeInTheDocument();
});
