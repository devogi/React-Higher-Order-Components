import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleClick (() => {

  } )
  return (
    <div>
      {count }
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
