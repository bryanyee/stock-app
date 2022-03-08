import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

it('renders the stock details page with stock api data', async () => {
  render(<App />);
  await screen.findByTestId('stock-index-content');
  userEvent.click(screen.getByText('TEST-TICKER'));
  await screen.findByTestId('stock-details-content');
  expect(screen.getByText('Test Inc. (TEST-TICKER)')).toBeVisible();
});