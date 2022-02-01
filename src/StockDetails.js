import { useParams } from "react-router-dom";

import useStockByTickerQuery from './useStockByTickerQuery';
import BackButton from './BackButton';
import StockHeader from './StockHeader';
import { formatPrice } from './utilities';
import styles from './StockDetails.module.css';

function StockDetails() {
  const { ticker } = useParams();
  const { data: stock, isLoading, isError } = useStockByTickerQuery(ticker);

  // For Production: Add loading and error UI states
  if (isLoading || isError) {
    return null;
  }

  // Sort prices by date, descending
  const prices = stock.historicalPrices.sort((dayPrice1, dayPrice2) => {
    if (dayPrice1.date < dayPrice2.date) return 1;
    if (dayPrice1.date > dayPrice2.date) return -1;
    return 0;
  });

  return (
    <div>
      <BackButton />
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
  )
}

export default StockDetails;
