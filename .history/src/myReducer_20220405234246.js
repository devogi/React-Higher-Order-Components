import React from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, text: state.showText };
      case "toggleShowTe":
      return { count: state.count + 1, text: state.showText };
  }
}

function myReducer() {
  return <div></div>;
}

export default myReducer;
