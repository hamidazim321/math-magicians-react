import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import Navbar from '../components/Navbar';

test('Navbar component matches snapshot', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
