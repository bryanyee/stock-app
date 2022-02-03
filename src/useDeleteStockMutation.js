import { useMutation } from 'react-query';

import { URLS } from './constants';

async function deleteStock(id) {
  const url = `${URLS.stocks}/${id}`;
  const response = await fetch(url, { method: 'DELETE' });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  return response.json();
}

function useDeleteStockMutation() {
  return useMutation(deleteStock);
}

export default useDeleteStockMutation;
