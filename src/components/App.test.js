import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import App from './App';

it('renders the app', async () => {
  render(<App />);
  expect(await screen.findByTestId('stock-index-page')).toBeVisible();
});

it('renders the index page with stocks links', async () => {
  render(<App />);
  await screen.findByTestId('stock-index-content');
  expect(screen.getByRole('link', { name: 'TEST-TICKER' })).toBeVisible();
  expect(screen.getByRole('link', { name: 'SECOND-TICKER' })).toBeVisible();
});

it('renders the stock details page with stock api data', async () => {
  render(<App />);
  await screen.findByTestId('stock-index-content');
  userEvent.click(screen.getByRole('link', { name: 'TEST-TICKER' }));
  await screen.findByTestId('stock-details-content');
  expect(screen.getByRole('heading', { name: 'Test Inc. (TEST-TICKER)' })).toBeVisible();
  expect(screen.getByTestId('stock-prices-table')).toBeVisible();
});