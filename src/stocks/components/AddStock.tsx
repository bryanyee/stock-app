import React, { FormEvent, useRef } from 'react';
import { useQueryClient } from 'react-query';

import useAddStockMutation from '../hooks/useAddStockMutation';

import styles from '../../shared.module.css';

interface AddStockProps {
  className?: string;
}

function AddStock({ className = '' }: AddStockProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const queryClient = useQueryClient();
  const addStockMutation = useAddStockMutation();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const ticker: string = target.ticker.value;

    addStockMutation.mutate({ ticker }, {
      onSuccess: (newStock: Stock) => {
        if (formRef.current) {
          formRef.current.reset();
        }

        // Update `stocks` in the react-query cache w/ the newly created data
        queryClient.setQueryData(
          'stocks',
          (oldStocks: Stock[] | undefined = []) => {
            return [
              ...oldStocks,
              newStock
            ]
          },
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

export default AddStock;
