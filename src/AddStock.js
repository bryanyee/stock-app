import { useRef } from 'react';

import useAddStockMutation from './useAddStockMutation';
import styles from './shared.module.css';

// Allow users to add new symbols in the list view. Throw validation when an existing symbol is added.
// - x StockIndex: Add component w/ input and button to add a new ticker
// - x Create a POST mutation to make the API call
// - Configure json-server to create new data on POST, and validate that the ticker is unique
// - x On API success, add ticker to the list
// - On API fail, show error message

function AddStock() {
  const formRef = useRef();
  const { mutate } = useAddStockMutation();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    mutate(data, {
      onSuccess: () => {
        formRef.current.reset();
      },
    });
  };

  return (
    <form onSubmit={onSubmit} ref={formRef}>
      <label htmlFor="ticker" className={styles['margin-right']}>Add Ticker</label>
      <input id="ticker" name="ticker" type="text" required className={styles['margin-right']} />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default AddStock;
