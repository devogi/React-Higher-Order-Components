import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1><button onClick={setCount(count + 1)}>Click me</button></h1>
    </div>
  );
}

export default App;
