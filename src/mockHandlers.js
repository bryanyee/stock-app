import { rest } from 'msw';

import { URLS } from './constants';

function createStock({ id = 100, ticker = 'DEFAULT-TICKER', name = 'Default Inc.' }) {
  return {
    id,
    ticker,
    name,
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
  };
}

const stock0 = createStock({ id: 0, ticker: 'TEST-TICKER', name: 'Test Inc.' });
const stock1 = createStock({ id: 1, ticker: 'SECOND-TICKER', name: 'Second Inc.' });
const newStock = createStock({ id: 2, ticker: 'NEW-TICKER', name: 'New Inc.' });

const handlers = [
  // GET /stocks?ticker=<ticker>
  // GET /stocks
  rest.get(URLS.stocks, (req, res, ctx) => {
    const tickerParam = req.url.searchParams.get('ticker');
    if (tickerParam) {
      return res(ctx.json([stock0]));
    }
    return res(ctx.json([stock0, stock1]));
  }),

  // POST /stocks
  rest.post(URLS.stocks, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json(newStock),
    );
  }),

  // DELETE /stocks/:id
  rest.delete(`${URLS.stocks}/:id`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({}),
    );
  }),
];

export default handlers;
