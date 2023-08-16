import {
  render, screen, fireEvent, cleanup,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import App from '../App';

afterEach(() => {
  cleanup();
});

describe('Integration test for App', () => {
  test('Renders App', () => {
    	const tree = renderer
    		.create(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
      )
    		.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('load the Quotes component by clickin on quotes in Navbar', async () => {
    const response = [
      {
        quote: 'mocked quote',
      },
    ];
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(response),
    });

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const quotes = await screen.findByText(/Quotes/);
    fireEvent.click(quotes);

    expect((await screen.findByText(/mocked/)).textContent).toBe('mocked quote');
  });

  test('load the calculator component by clickin on Calculator in Navbar', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const calculator = await screen.findByText(/Calculator/);
    fireEvent.click(calculator);

    const calc = document.getElementsByClassName('calculator')[0];
    expect(calc).toBeInTheDocument();
  });
});
