import React from "react";

function useReducer() {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
  }

  function myReducer() {
    const [state, dispatch] = useReducer(myReducer, {
      count: 0,
      showText: true,
    });
  }

  return (
    <div>
      <h1> {state.count} </h1>
      <button>Click me</button>
    </div>
  );
}

export default useReducer;
