import React, {useState} from 'react';


const App = () => {
  
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 data-testid="count">{count}</h1>
      <button data-testid="increment" onClick={() => setCount(count => count + 1)}>Increment</button>
      <button data-testid="decrement" onClick={() => setCount(count => count - 1)}>Decrement</button>
      <button data-testid="reset" onClick={() => setCount(0)}>Reset</button>
    </>
  )
}

export default App