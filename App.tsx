import React, {useState} from 'react';
import Contador from './src/components/Contador/Contador';

const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <Contador
      setContar={() => setCount(count + 1)}
      show={count}
      setZerar={() => setCount(0)}
    />
  );
};

export default App;
