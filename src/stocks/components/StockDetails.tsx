import { useParams } from 'react-router-dom';

import StockHeader from './StockHeader';
import styles from './StockDetails.module.css';

import useStockByTickerQuery from '../hooks/useStockByTickerQuery';

import BackButton from '../../components/BackButton';

import { formatPrice } from '../../utilities';

function StockDetails() {
  const { ticker } = useParams<{ticker: string}>();
  const stockByTickerQuery = useStockByTickerQuery(ticker!);
  const stock = stockByTickerQuery.data as Stock;

  return (
    <div>
      <BackButton />
      {/* For Production: Add loading and error UI states */}
      {(stockByTickerQuery.isLoading || stockByTickerQuery.isError)
        ? null
        : <StockDetailsContent stock={stock} />
      }
    </div>
  )
}

export default StockDetails;

function StockDetailsContent({ stock }: { stock: Stock }) {
  // Sort prices by date, descending
  const prices = stock.historicalPrices.sort((dayPrice1, dayPrice2) => {
    if (dayPrice1.date < dayPrice2.date) return 1;
    if (dayPrice1.date > dayPrice2.date) return -1;
    return 0;
  });

  return (
    <div data-testid="stock-details-content">
      <StockHeader stock={stock} />
      <table className={styles['price-table']}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {prices.map((dayPrice) => (
            <tr key={dayPrice.date}>
              <td>{dayPrice.date}</td>
              <td>{formatPrice(dayPrice.open)}</td>
              <td>{formatPrice(dayPrice.high)}</td>
              <td>{formatPrice(dayPrice.low)}</td>
              <td>{formatPrice(dayPrice.close)}</td>
              <td>{dayPrice.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
