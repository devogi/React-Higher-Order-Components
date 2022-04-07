import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const increment =() => [
setCount(count)
  ]
  return (
    <div>
      <h1> {count} </h1>
      <button onClick={increment}>increment</button>
    </div>
  );
}

export default App;
