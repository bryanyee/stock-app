import { Link } from "react-router-dom";

import useStocksQuery from './useStocksQuery';
import styles from './StockIndex.module.css';

function StockIndex() {
  const { data: stocks, isLoading, isError } = useStocksQuery();
  
  // For Production: Add loading and error UI states
  if (isLoading || isError) {
    return null;
  }

  return (
    <div>
      <Link to="login" className={styles['nav-link']}>Login</Link>
      <h2>Welcome to the Stock App!</h2>
      <div>
        <table className={styles['stock-table']}>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Company Name</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => (
              <tr key={stock.ticker}>
                <td>
                  <Link to={`/stocks/${stock.ticker}`}>
                    {stock.ticker}
                  </Link>
                </td>
                <td>{stock.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StockIndex;
