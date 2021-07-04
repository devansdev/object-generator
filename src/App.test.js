import { render, screen } from '@testing-library/react';
import App from './App';

test('check generate button', () => {
  render(<App />);
  const linkElement = screen.getByText(/generate/i);
  expect(linkElement).toBeInTheDocument();
});
