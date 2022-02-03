import { useRef } from 'react';

import useAddStockMutation from './useAddStockMutation';
import styles from './shared.module.css';

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
      onError: (message) => {
        alert(message);
      }
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
