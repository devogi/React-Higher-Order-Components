import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, showText] = useState(true);

  return (
    <div className="App">
      <h1> {count} </h1>
      <button
        onClick={() => {
          setCount = count + 1;
          showText = !text;
        }}
      >
        Click me
      </button>
{showText &&   }

    </div>
  );
}

export default App;
