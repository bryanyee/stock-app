import { rest } from 'msw';

import { URLS } from './constants';

const stockStubs = [
  {
    "id": 0,
    "ticker": "TEST-TICKER",
    "name": "Test Inc.",
    "currentPrice": 174.78,
    "historicalPrices": [
      {
        "date": "2022-01-14",
        "open": 171.339996,
        "high": 173.779999,
        "low": 171.089996,
        "close": 173.070007,
        "volume": 80355000
      }
    ]
  },
  {
    "id": 1,
    "ticker": "SECOND-TICKER",
    "name": "Second Inc.",
    "currentPrice": 10,
    "historicalPrices": [
      {
        "date": "2022-01-14",
        "open": 9,
        "high": 11,
        "low": 8,
        "close": 10,
        "volume": 100
      }
    ]
  }
];

const handlers = [
  // GET /stocks?ticker=<ticker>
  // GET /stocks
  rest.get(URLS.stocks, (req, res, ctx) => {
    const tickerParam = req.url.searchParams.get('ticker');
    if (tickerParam) {
      return res(ctx.json([stockStubs[0]]));
    }
    return res(ctx.json(stockStubs));
  }),
];

export default handlers;
