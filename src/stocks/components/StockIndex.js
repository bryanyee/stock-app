import { useState } from 'react';
import { Link } from 'react-router-dom';

import AddStock from './AddStock';
import DeleteStockConfirmation from './DeleteStockConfirmation';
import styles from './StockIndex.module.css';

import useStocksQuery from '../hooks/useStocksQuery';

import sharedStyles from '../../shared.module.css';

function StockIndex() {
  const [selectedStockIdForDeletion, setSelectedStockIdForDeletion] = useState(null);
  const { data: stocks = [], isLoading, isError } = useStocksQuery();

  const selectedStock = stocks.find(({ id }) => id === selectedStockIdForDeletion);
  
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
            {stocks.map(({ ticker, id, name }) => (
              <tr key={ticker}>
                <td>
                  <Link to={`/stocks/${ticker}`}>
                    {ticker}
                  </Link>
                </td>
                <td>{name}</td>
                <td><button onClick={() => setSelectedStockIdForDeletion(id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <AddStock className={sharedStyles['margin-bottom']} />
        {selectedStockIdForDeletion !== null && (
          <DeleteStockConfirmation
            id={selectedStock.id}
            ticker={selectedStock.ticker}
            onCancelClick={() => setSelectedStockIdForDeletion(null)}
            onConfirmSuccess={() => setSelectedStockIdForDeletion(null)}
          />
        )}
      </div>
    </div>
  )
}

export default StockIndex;
