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

    const btnTwo = await screen.findByText('2');
    const btnPlus = await screen.findByText('+');
    const btnEqual = await screen.findByText('=');

    await fireEvent.click(btnTwo);
    await fireEvent.click(btnPlus);
    await fireEvent.click(btnTwo);
    await fireEvent.click(btnEqual);

    const calcScreen = document.querySelector('.calculator-screen p');

    expect(await calcScreen.textContent).toBe('4');
  });

  test('clicking AC should clear the screen', async () => {
    render(<Calculator />);
    const btnTwo = await screen.findByText('2');
    const btnPlus = await screen.findByText('+');
    const btnClear = await screen.findByText('AC');
    await fireEvent.click(btnTwo);
    await fireEvent.click(btnPlus);
    await fireEvent.click(btnTwo);
    await fireEvent.click(btnClear);
    const calcScreen = document.querySelector('.calculator-screen p');
    expect(await calcScreen.textContent).toBe("");
  });

  test('Adding a negative number and a positive', async () => {
    render(<Calculator />);
    const btnTwo = await screen.findByText('2');
    const btnPlus = await screen.findByText('+');
    const btnEqual = await screen.findByText('=');
    const btnNegative = await screen.findByText('+/-')
    await fireEvent.click(btnTwo);
    await fireEvent.click(btnNegative)
    await fireEvent.click(btnPlus);
    await fireEvent.click(btnTwo);
    await fireEvent.click(btnEqual);
    const calcScreen = document.querySelector('.calculator-screen p');
    expect(await calcScreen.textContent).toBe("0");
  });

  test('9 % 2 = 1', async () => {
    render(<Calculator />);
    const btn1 = await screen.findByText('9');
    const btn2 = await screen.findByText('2')
    const btnMod = await screen.findByText('%');
    const btnEqual = await screen.findByText('=');
    await fireEvent.click(btn1);
    await fireEvent.click(btnMod);
    await fireEvent.click(btn2);
    await fireEvent.click(btnEqual);
    const calcScreen = document.querySelector('.calculator-screen p');
    expect(await calcScreen.textContent).toBe("1");
  });

  test('9 - 2 = 7', async () => {
    render(<Calculator />);
    const btn1 = await screen.findByText('9');
    const btn2 = await screen.findByText('2')
    const btnMinus = await screen.findByText('-');
    const btnEqual = await screen.findByText('=');
    await fireEvent.click(btn1);
    await fireEvent.click(btnMinus);
    await fireEvent.click(btn2);
    await fireEvent.click(btnEqual);
    const calcScreen = document.querySelector('.calculator-screen p');
    expect(await calcScreen.textContent).toBe("7");
  });

  test('9 x 2 = 18', async () => {
    render(<Calculator />);
    const btn1 = await screen.findByText('9');
    const btn2 = await screen.findByText('2')
    const btnMinus = await screen.findByText('x');
    const btnEqual = await screen.findByText('=');
    await fireEvent.click(btn1);
    await fireEvent.click(btnMinus);
    await fireEvent.click(btn2);
    await fireEvent.click(btnEqual);
    const calcScreen = document.querySelector('.calculator-screen p');
    expect(await calcScreen.textContent).toBe("18");
  });

  test('4 ÷ 2 = 2', async () => {
    render(<Calculator />);
    const btn1 = await screen.findByText('4');
    const btn2 = await screen.findByText('2')
    const btnMinus = await screen.findByText('÷');
    const btnEqual = await screen.findByText('=');
    await fireEvent.click(btn1);
    await fireEvent.click(btnMinus);
    await fireEvent.click(btn2);
    await fireEvent.click(btnEqual);
    const calcScreen = document.querySelector('.calculator-screen p');
    expect(await calcScreen.textContent).toBe("2");
  });

  test('4 ÷ 0 = Math Error', async () => {
    render(<Calculator />);
    const btn1 = await screen.findByText('4');
    const btn2 = await screen.findByText('0')
    const btnMinus = await screen.findByText('÷');
    const btnEqual = await screen.findByText('=');
    await fireEvent.click(btn1);
    await fireEvent.click(btnMinus);
    await fireEvent.click(btn2);
    await fireEvent.click(btnEqual);
    const calcScreen = document.querySelector('.calculator-screen p');
    expect(await calcScreen.textContent).toBe("Math Error");
  });


});
