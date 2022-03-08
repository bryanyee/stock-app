import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

it('renders the app', async () => {
  render(<App />);
  await screen.findByTestId('stock-index-page');
  expect(screen.getByText('Welcome to the Stock App!')).toBeVisible();
});

it('renders the index page with /stocks api data', async () => {
  render(<App />);
  await screen.findByTestId('stock-index-content');
  expect(screen.getByText('Test Inc.')).toBeVisible();
});
