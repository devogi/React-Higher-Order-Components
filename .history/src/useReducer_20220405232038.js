import React from "react";

function useReducer() {
  function reducer(state, action) {
      switch(action.type) {
          case  "INCREMENT" :
              return state.
      }
  }

  return (
    <div>
      <h1> {state.count} </h1>
      <button>Click me</button>
    </div>
  );
}

export default useReducer;
