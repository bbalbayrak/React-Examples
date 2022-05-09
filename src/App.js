import React from 'react';
import Counter from './components/Counter';
import DecreaseCounter from './components/DecreaseCounter';
import IncreaseCounter from './components/IncreaseCounter';

function App() {
  return (
    <div>
      <Counter/>
      <IncreaseCounter/>
      <DecreaseCounter/>  
    </div>
  );
}

export default App;
