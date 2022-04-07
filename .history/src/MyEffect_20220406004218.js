import React from "react";

function MyEffect() {
  return (
    <div>
      <h1>Pedro</h1>

      <input type="text" placeholder="ex..." ref={inputRef} />
      <button onClick={onClick} >Change </button>
    </div>
  );
}

export default MyEffect;
