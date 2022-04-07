import { useReducer, useState } from "react";
import React from "react";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer,{ count:0, showText: true]})

  return (
    <div className="App">
      <h1> {count} </h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setShowText(!showText);
        }}
      >
        Click me
      </button>
      {showText && <p>This is a text</p>}
    </div>
  );
}

export default App;
