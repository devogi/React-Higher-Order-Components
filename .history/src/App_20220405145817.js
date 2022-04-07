import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, showText] = useState(false);

  return <div className="App">
    <h1> {count} </h1>
    <button onClick={() => {}} >Click me</button>
  </div>;
}

export default App;
