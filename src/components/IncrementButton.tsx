import React from 'react';
import { useCounter } from './CounterContext';

const IncrementButton: React.FC = () => {
  const { increment  } = useCounter();

  return (
    <button onClick={increment }>Iecrement</button>
  );
};

export default IncrementButton;
