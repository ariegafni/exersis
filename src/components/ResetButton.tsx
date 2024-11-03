import React from 'react';
import { useCounter } from './CounterContext';

const ResetButton: React.FC = () => {
  const { reset } :any= useCounter();

  return (
    <button onClick={reset}>Reset</button>
  );
};

export default ResetButton;
