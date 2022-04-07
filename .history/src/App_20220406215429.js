import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={hand}>Click me</button>
    </div>
  );
}

export default App;
