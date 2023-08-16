import operate from '../logic/Operate';

describe('should do correct math operations', () => {
  test('1 + 1 = 2', () => {
    const result = operate(1, 1, '+');
    expect(result).toBe('2');
  });

  test('1 - 1= 0', () => {
    const result = operate(1, 1, '-');
    expect(result).toBe('0');
  });

  test('4 / 2 = 2', () => {
    const result = operate(4, 2, '÷');
    expect(result).toBe('2');
  });

  test('4 x 2 = 8', () => {
    const result = operate(4, 2, 'x');
    expect(result).toBe('8');
  });
});
