import { useState } from "react";
i
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  return (
    <div className="App">
      <h1> {count} </h1>
      <button
        onClick={() => {
          setCount = count + 1;
          setShowText = !showText;
        }}
      >
        Click me
      </button>
      {showText && <p>This is a text</p>}
    </div>
  );
}

export default App;
