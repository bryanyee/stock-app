import { useQuery } from 'react-query';

import { URLS } from './constants';

// Alternative Approach: Use the stock `id` instead of `ticker` in the web app url, and
// request stock resource data from /stocks/:id
async function fetchStockByTicker({ queryKey }) {
  const ticker = queryKey[1];
  const url = `${URLS.stocks}?ticker=${ticker}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Bad response');
  }
  const data = await response.json();
  // Data is returned as a list, rather than a single resource, since the
  // API call uses filtering params to request by ticker
  return data[0];
}

function useStockByTickerQuery(ticker) {
  return useQuery(['stocks', ticker], fetchStockByTicker);
}

export default useStockByTickerQuery;
