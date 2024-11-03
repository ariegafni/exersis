import React from 'react';
import { useCounter } from './CounterContext';

const CounterDisplay: React.FC = () => {
  const { count } = useCounter();

  return (
    <div>
      <h2>Counter: {count}</h2>
    </div>
  );
};

export default CounterDisplay;
