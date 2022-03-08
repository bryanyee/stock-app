import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom';

import App from './App';

function renderAppWithRouter() {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
}

it('renders the app', async () => {
  renderAppWithRouter()
  expect(await screen.findByTestId('stock-index-page')).toBeVisible();
});

it('renders the index page with stocks links', async () => {
  renderAppWithRouter()
  await screen.findByTestId('stock-index-content');
  expect(screen.getByRole('link', { name: 'TEST-TICKER' })).toBeVisible();
  expect(screen.getByRole('link', { name: 'SECOND-TICKER' })).toBeVisible();
});

it('renders the stock details page with stock api data', async () => {
  renderAppWithRouter();
  await screen.findByTestId('stock-index-content');
  userEvent.click(screen.getByRole('link', { name: 'TEST-TICKER' }));
  await screen.findByTestId('stock-details-content');
  expect(screen.getByRole('heading', { name: 'Test Inc. (TEST-TICKER)' })).toBeVisible();
  expect(screen.getByTestId('stock-prices-table')).toBeVisible();
});

it('removes a stock after confirming deletion', async () => {
  renderAppWithRouter()
  await screen.findByTestId('stock-index-content');
  expect(screen.getByRole('link', { name: 'TEST-TICKER' })).toBeVisible();
  userEvent.click(screen.getByTestId('delete-TEST-TICKER'));
  const confirmDeleteButton = await screen.findByRole('button', { name: 'Confirm' });
  userEvent.click(confirmDeleteButton);
  await waitFor(() => {
    expect(screen.queryByRole('link', { name: 'TEST-TICKER' })).not.toBeInTheDocument();
  });
});