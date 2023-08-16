import {render} from '@testing-library/react'
import Calculator from '../components/Calculator';

test('should render', ()=> {
  const { asFragment } = render(<Calculator />);
  expect(asFragment()).toMatchSnapshot();
})