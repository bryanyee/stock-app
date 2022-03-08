import { rest } from 'msw';

import { URLS } from './constants';

const stockStub = {
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
};

const handlers = [
  rest.get(URLS.stocks, (req, res, ctx) => {
    return res(ctx.json([stockStub]));
  }),

  rest.get(`${URLS.stocks}?ticker=TEST-TICKER`, (req, res, ctx) => {
    return res(ctx.json(stockStub));
  }),
];

export default handlers;
