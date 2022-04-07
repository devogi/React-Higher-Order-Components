import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, text: state.showText };
    case "toggleShowText":
      return { count: state.count, text: !state.showText };
    default:
      return state;
  }
}

function myReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return <div>
    <h1> {count}  </h1>
    <button>Click me</button>
  </div>;
}

export default myReducer;
