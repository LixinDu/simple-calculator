import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    setResult((prevResult) => prevResult + parseFloat(input || 0));
  };

  const handleSubtract = () => {
    setResult((prevResult) => prevResult - parseFloat(input || 0));
  };

  const handleMultiply = () => {
    setResult((prevResult) => prevResult * parseFloat(input || 1));
  };

  const handleDivide = () => {
    if (parseFloat(input) !== 0) {
      setResult((prevResult) => prevResult / parseFloat(input || 1));
    } else {
      alert('Cannot divide by zero');
    }
  };

  const resetInput = () => {
    setInput('');
  };

  const resetResult = () => {
    setResult(0);
  };

  return (
    <div className="App">
      <h1>Simplest Working Calculator</h1>
      <h2>{result}</h2>

      <input
        type="number"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <br />

      <button onClick={handleAdd}>add</button>
      <button onClick={handleSubtract}>subtract</button>
      <button onClick={handleMultiply}>multiply</button>
      <button onClick={handleDivide}>divide</button>

      <br />

      <button onClick={resetInput}>reset input</button>
      <button onClick={resetResult}>reset result</button>
    </div>
  );
}

export default App;
