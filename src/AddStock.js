import { useRef } from 'react';
import PropTypes from 'prop-types';
import { useQueryClient } from 'react-query';

import useAddStockMutation from './useAddStockMutation';
import styles from './shared.module.css';

function AddStock({ className }) {
  const formRef = useRef();
  const queryClient = useQueryClient();
  const addStockMutation = useAddStockMutation();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    addStockMutation.mutate(data, {
      onSuccess: (newStock) => {
        formRef.current.reset();

        // Update `stocks` in the react-query cache w/ the newly created data
        queryClient.setQueryData(
          'stocks',
          (oldStocks) => [...oldStocks, newStock],
        );
      },
      onError: (message) => {
        alert(message);
      }
    });
  };

  return (
    <form onSubmit={onSubmit} ref={formRef} className={className}>
      <label htmlFor="ticker" className={styles['margin-right']}>Add Ticker</label>
      <input id="ticker" name="ticker" type="text" required className={styles['margin-right']} />
      <input type="submit" value="Submit" />
    </form>
  );
}

AddStock.defaultProps = {
  className: '',
};

AddStock.propTypes = {
  className: PropTypes.string,
};

export default AddStock;
