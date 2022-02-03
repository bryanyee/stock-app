const fs = require('fs');

function buildStock({ ticker, name, currentPrice, historicalPrices }) {
  const num = (Math.random() * 1000).toFixed();
  return {
    ticker: ticker || num.toString(),
    name: name || `Test Company ${num}`,
    currentPrice: currentPrice || (Math.random() * 100).toFixed(2),
    historicalPrices: historicalPrices || [
      {
        "date": "2022-01-27",
        "open": 162.449997,
        "high": 163.839996,
        "low": 158.279999,
        "close": 159.220001,
        "volume": 116691400
      },
      {
        "date": "2022-01-28",
        "open": 165.710007,
        "high": 170.350006,
        "low": 162.800003,
        "close": 170.330002,
        "volume": 179485800
      },
    ],
  }
}

// Alternative Approach: Use lowdb to read data from the json db
function tickerExists(ticker) {
  const file = fs.readFileSync('./db.json');
  const db = JSON.parse(file);
  const stock = db.stocks.find((stock) => stock.ticker === ticker);
  return stock !== undefined;
}

module.exports = {
  buildStock,
  tickerExists,
};


