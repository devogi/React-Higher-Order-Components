import { useReducer, useState } from "react";
import React from "react";
import "./App.css";

function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1, showText: state.showText };
      case "toggleShowText":
        return { count: state.count, showText: !state.showText };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div className="App">
      <h1> {count} </h1>
      <button
        onClick={() => {
          dispatch
        }}
      >
        Click me
      </button>
      {showText && <p>This is a text</p>}
    </div>
  );
}

export default App;
