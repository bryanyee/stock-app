import { Link } from "react-router-dom";

import stocks from './stocks.json';
import styles from './StockList.module.css';

function StockList() {
  return (
    <div>
      <h2>Stocks</h2>
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
                  <Link to={stock.ticker}>
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

export default StockList;
