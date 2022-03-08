import { useState } from 'react';
import { Link } from 'react-router-dom';

import AddStock from './AddStock';
import DeleteStockConfirmation from './DeleteStockConfirmation';
import styles from './StockIndex.module.css';

import useStocksQuery from '../hooks/useStocksQuery';

import sharedStyles from '../../shared.module.css';

function StockIndex() {
  const stocksQuery = useStocksQuery();
  const stocks: Stock[] = stocksQuery.data || [];

  return (
    <div data-testid="stock-index-page">
      <Link to="login" className={styles['nav-link']}>Login</Link>
      <h2>Welcome to the Stock App!</h2>
      {/* For Production: Add loading and error UI states */}
      {(stocksQuery.isLoading || stocksQuery.isError)
        ? null
        : <StockIndexContent stocks={stocks} />
      }
    </div>
  )
}

export default StockIndex;

function StockIndexContent({ stocks }: { stocks: Stock[] }) {
  const [selectedStockIdForDeletion, setSelectedStockIdForDeletion] = useState<number | null>(null);
  const selectedStock: Stock | undefined = stocks.find(({ id }) => id === selectedStockIdForDeletion);

  return (
    <div data-testid="stock-index-content">
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
              <td>
                <button
                  data-testid={`delete-${ticker}`}
                  onClick={() => setSelectedStockIdForDeletion(id)}
                  >
                    Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddStock className={sharedStyles['margin-bottom']} />
      {selectedStock && (
        <DeleteStockConfirmation
          id={selectedStock.id}
          ticker={selectedStock.ticker}
          onCancelClick={() => setSelectedStockIdForDeletion(null)}
          onConfirmSuccess={() => setSelectedStockIdForDeletion(null)}
        />
      )}
    </div>
  );
}
