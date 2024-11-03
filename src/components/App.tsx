import React from 'react';
import { CounterProvider } from './CounterContext';
import CounterDisplay from './CounterDisplay';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import ResetButton from './ResetButton';

const App: React.FC = () => {
  return (
    <CounterProvider>
      <div>
        <CounterDisplay />
        <IncrementButton />
        <DecrementButton />
        <ResetButton />
      </div>
    </CounterProvider>
  );
};

export default App;
