import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);
  const getItems = () => {
    return [number, number + 1, number + 2];
  };

  const theme =   {
    
  }

  return <div></div>;
}

export default App;
