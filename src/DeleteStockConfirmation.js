import { useQueryClient } from 'react-query';

import useDeleteStockMutation from './useDeleteStockMutation';
import styles from './shared.module.css';

function DeleteStockConfirmation({ id, ticker, onCancelClick, onConfirmClick }) {
  const queryClient = useQueryClient();
  const deleteStockMutation = useDeleteStockMutation();

  const onConfirmClickInner = () => {
    deleteStockMutation.mutate(id, {
      onSuccess: () => {
        // Update `stocks` in the react-query cache to remove the deleted stock
        queryClient.setQueryData(
          'stocks',
          (oldStocks) => {
            const staleIndex = oldStocks.findIndex((stock) => stock.id === id);
            return oldStocks.slice(0, staleIndex).concat(oldStocks.slice(staleIndex + 1));
          },
        );

        onConfirmClick();
      },
    });
  };

  return (
    <div>
      <span className={styles['margin-right']}>{`Delete stock: ${ticker}?`}</span>
      <button onClick={onConfirmClickInner} className={styles['margin-right']}>Confirm</button>
      <button onClick={onCancelClick}>Cancel</button>
    </div>
  );
}

export default DeleteStockConfirmation;
