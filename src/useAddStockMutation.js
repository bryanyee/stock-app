import { useMutation } from 'react-query';

import { URLS } from './constants';

async function addStock({ ticker }) {
  const response = await fetch(URLS.stocks, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ticker }),
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  return response.json();
}

function useAddStockMutation() {
  return useMutation(addStock);
}

export default useAddStockMutation;
