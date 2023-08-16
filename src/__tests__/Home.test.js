import { render, screen, cleanup } from '@testing-library/react';
import Home from '../components/Home';

test('should render', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});
