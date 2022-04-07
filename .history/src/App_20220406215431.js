import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
