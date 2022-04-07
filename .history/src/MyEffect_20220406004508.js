import React, { useRef } from "react";

function MyEffect() {
  const inputRef = useRef(null);
  const onClick = () => {
    inputRef.current.f
  }

  return (
    <div>
      <h1>Pedro</h1>
      <input type="text" placeholder="ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default MyEffect;
