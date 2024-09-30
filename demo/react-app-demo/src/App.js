import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const onClickBtn = () => {
    setCount(count+1)
  }
  return (
    <div className="App">
      <h1>count: {count}</h1>
      <div>
        <button onClick={onClickBtn}>+1</button>
      </div>
    </div>
  );
}

export default App;
