import React, { useState } from "react";
import Login from "./Login";
import User from "./User";

function MyEffect(  ) {
  const [userName, setUserName] = useState("");
  return (
    <div>
      <Login inputRef.current.focus(); /> <User userName={userName} />
    </div>
  );
}

export default MyEffect;
