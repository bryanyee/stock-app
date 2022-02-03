const jsonServer = require('json-server');
const { buildStock, tickerExists } = require('./serverUtilities');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST' && req.path === '/stocks') {
    const ticker = req.body.ticker;
    // Validate that the ticker doesn't already exist.
    const alreadyExists = tickerExists(ticker);
    if (alreadyExists) {
      res.status(422).send(`Ticker ${ticker} already exists.`);
      return;
    }
    // Extend the request body with stub stock data.
    const newStock = buildStock({ ticker: req.body.ticker });
    req.body.currentPrice = newStock.currentPrice;
    req.body.name = newStock.name;
    req.body.historicalPrices = newStock.historicalPrices;
  }
  next();
});
server.use(router);

server.listen(3004, () => {
  console.log('Stock App JSON Server is running at port 3004!')
});
