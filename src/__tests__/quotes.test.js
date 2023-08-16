import React from 'react';
import { render } from '@testing-library/react';
import Quotes from '../components/quotes'; // Make sure the path is correct

test('renders quote', async () => {
  const response = [
    {
      quote: 'mocked quote',
    },
  ];

  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(response),
  });

  const { asFragment } = await render(<Quotes />);
  
  // Wait for the quote to be displayed
  expect(asFragment()).toMatchSnapshot();
});
