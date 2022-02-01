import { useQuery } from 'react-query';

import { URLS } from './constants';

// For Production: Lookup singular resource data from the react-query cache first,
// before making an API call. However, this is only a viable approach as long as
// the Stock Details page can get all its data from the /stocks index API call
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
