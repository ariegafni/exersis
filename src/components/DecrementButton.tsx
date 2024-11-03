import React from 'react';
import { useCounter } from './CounterContext';

const DecrementButton: React.FC = () => {
  const { decrement } = useCounter();

  return (
    <button onClick={decrement}>Decrement</button>
  );
};

export default DecrementButton;
