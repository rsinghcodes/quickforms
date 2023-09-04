import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './index';

test('renders Quick Forms link with correct URL', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Quick Forms/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.getAttribute('href')).toBe('/');
});
