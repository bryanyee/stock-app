import PropTypes from 'prop-types';
import { useQueryClient } from 'react-query';

import useDeleteStockMutation from '../hooks/useDeleteStockMutation';

import styles from '../../shared.module.css';

function DeleteStockConfirmation({ id, ticker, onCancelClick, onConfirmSuccess }) {
  const queryClient = useQueryClient();
  const deleteStockMutation = useDeleteStockMutation();

  const onConfirmClick = () => {
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

        onConfirmSuccess();
      },
    });
  };

  return (
    <div>
      <span className={styles['margin-right']}>{`Delete stock: ${ticker}?`}</span>
      <button onClick={onConfirmClick} className={styles['margin-right']}>Confirm</button>
      <button onClick={onCancelClick}>Cancel</button>
    </div>
  );
}

DeleteStockConfirmation.defaultProps = {
  onCancelClick: () => {},
  onConfirmSuccess: () => {},
};

DeleteStockConfirmation.propTypes = {
  id: PropTypes.number.isRequired,
  ticker: PropTypes.string.isRequired,
  onCancelClick: PropTypes.func,
  onConfirmSuccess: PropTypes.func,
};

export default DeleteStockConfirmation;
