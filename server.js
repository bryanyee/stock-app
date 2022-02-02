const jsonServer = require('json-server');
const { buildStock } = require('./serverUtilities');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST' && req.path === '/stocks') {
    const stock = buildStock({ ticker: req.body.ticker });
    req.body.currentPrice = stock.currentPrice;
    req.body.name = stock.name;
    req.body.historicalPrices = stock.historicalPrices;
  }
  next();
});
server.use(router);

server.listen(3004, () => {
  console.log('Stock App JSON Server is running at port 3004!')
});
