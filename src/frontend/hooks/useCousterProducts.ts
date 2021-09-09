import { useState } from 'react';

const useCounterProducts = (initialState = 1) => {

  const [state, setstate] = useState(initialState);

  const increment = () => {
    setstate(state + 1);
  };

  const decrement = () => {
    setstate(state - 1);
    const signo = Math.sign(state);
    if (signo === -1) {
      setstate(initialState);
    }
  };

  const reset = () => {
    setstate(initialState);
  };

  return {
    counter: state,
    increment,
    decrement,
    reset,
  };

};

export default useCounterProducts;
