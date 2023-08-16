import { render } from '@testing-library/react';
import CalcBtn from '../components/Btn';

test('should render', () => {
  const { asFragment } = render(<CalcBtn text="hello" handleClick={() => 'hello'} />);
  expect(asFragment()).toMatchSnapshot();
});
