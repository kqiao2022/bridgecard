import { useState, useEffect } from 'react';

const useCounter = (s, cb) => {
  const [count, setCount] = useState(s);
  const add = (addend = 1) => {
    setCount(count + addend);
  };

  useEffect(cb, [count]);

  return { count, add };
};

export default useCounter;