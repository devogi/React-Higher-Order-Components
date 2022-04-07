import { useReducer, useState } from "react";
import React from "react";
import "./App.css";

function App() {
    function const initialState = {
    
    }
    
    export default (state = initialState, { type, payload }) => {
      switch (type) {
    
      case typeName:
        return { ...state, ...payload }
    
      default:
        return state
      }
    }
    





    
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

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
