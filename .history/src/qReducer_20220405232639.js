import React from "react";

function reducer() {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }

  function myReducer() {
    const [state, dispatch] = useReducer(reducer, {
      count: 0,
      showText: true,
    });
  }

  return (
    <div>
      <h1> {state.count} </h1>
      <button onClick={() => {}} >Click me</button>
    </div>
  );
}

export default qReducer;
