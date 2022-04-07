import React from 'react'

function myReducer() {

  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
 
}
}
return(
  <div>
    
  </div>
)



export default myReducer
