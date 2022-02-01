import { useQuery } from 'react-query';

import { URLS } from './constants';

async function fetchStocks() {
  const url = `${URLS.stocks}?_sort=ticker&_order=asc`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Bad response');
  }
  return response.json();
}

function useStocksQuery() {
  return useQuery('stocks', fetchStocks);
}

export default useStocksQuery;
