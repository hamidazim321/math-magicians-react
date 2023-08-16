import React from 'react';
import { render, screen } from '@testing-library/react';
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

  render(<Quotes />);
  
  await screen.findByText(/mocked quote/);

  const quotesDiv = document.getElementsByClassName('quotes')[0]

  expect(quotesDiv).toMatchSnapshot()
});
