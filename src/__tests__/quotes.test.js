import React from 'react';
import { render, screen } from '@testing-library/react';
import Quotes from '../components/quotes'; // Make sure the path is correct

describe('Render a quote or error', () => {
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
  
  test('show error when the quote is not there', async ()=>{
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(new Error()),
    });
  
    render(<Quotes />);
  
    expect((await screen.findByText(/Error/)).textContent).toBe('Error loading the quotes. Please try again.')
  })

})