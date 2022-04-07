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
const [state, dispatch] = useReducer(reducer, {count: 0 , })

  return <div></div>;
}

export default myReducer;
