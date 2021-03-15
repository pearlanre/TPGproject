import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Point to Cash Calculator', () => {
  render(<App />);
  const linkElement = screen.getByText(/Cash to Points Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
