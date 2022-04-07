import React, { useState } from "react";
import Login from "./Login";
import User from "./User";

function MyEffect({ setUserName }) {
  const [userName, setUserName] = useState("");
  return (
    <div>
      <Login setUserName={setUserName} /> <User userName={userName} />
    </div>
  );
}

export default MyEffect;
