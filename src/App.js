import React from 'react';
import { useState } from 'react';
import './style.css';

const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  return {
    increment,
    decrement,
    reset,
    counter,
  };
};

export default function App() {
  const counterA = useCounter(0);
  const counterB = useCounter(0);

  return (
    <div>
      <h1>Custom hook</h1>

      <div
        style={{
          background: 'white',
          borderRadius: 12,
          padding: 30,
          margin: 30,
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignSelf: 'center',
            margin: 10,
          }}
        >
          {counterA.counter}
        </div>
        <button onClick={counterA.increment}>+</button>
        <button onClick={counterA.decrement}>-</button>
        <button onClick={counterA.reset}>reset</button>
      </div>

      <div
        style={{
          background: 'white',
          borderRadius: 12,
          padding: 30,
          margin: 30,
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignSelf: 'center',
            margin: 10,
          }}
        >
          {counterB.counter}
        </div>
        <button onClick={counterB.increment}>+</button>
        <button onClick={counterB.decrement}>-</button>
        <button onClick={counterB.reset}>reset</button>
      </div>
    </div>
  );
}
