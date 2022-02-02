import { useMutation, useQueryClient } from 'react-query';

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
    throw new Error('Bad response');
  }
  return response.json();
}

function useAddStockMutation() {
  const queryClient = useQueryClient();

  return useMutation(addStock, {
    // Update `stocks` in the react-query cache w/ the newly created data
    onSuccess: (newStock) => {
      queryClient.setQueryData(
        'stocks',
        (oldStocks) => [...oldStocks, newStock],
      );
    }
  });
}

export default useAddStockMutation;
