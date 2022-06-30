import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return <p className="m-10">{count}</p>;
}

export default function App() {
  return <Timer />;
}
