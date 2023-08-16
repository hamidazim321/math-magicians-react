import {
  render, fireEvent, screen, cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import Calculator from '../components/Calculator';

afterEach(() => {
  cleanup();
});

describe('Integration tests for calculator component', () => {
  test('should render', () => {
    const { asFragment } = render(<Calculator />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('2 + 2 should display 4', async () => {
    render(<Calculator />);

    const btnTwo = await screen.findByText(/2/);
    const btnPlus = await screen.findByText('+');
    const btnEqual = await screen.findByText(/=/);

    await fireEvent.click(btnTwo);
    await fireEvent.click(btnPlus);
    await fireEvent.click(btnTwo);
    await fireEvent.click(btnEqual);

    const calcScreen = document.querySelector('.calculator-screen p');

    expect(await calcScreen.textContent).toBe('4');
  });
});
