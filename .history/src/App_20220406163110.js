import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);
  const getItems = () => {
    return [number, number + 1, number + 2];
  };

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
    <button onClick={() =>setDark(prevDark => !prevDark) } > Toggle T </button>
    </div>
  );
}

export default App;
