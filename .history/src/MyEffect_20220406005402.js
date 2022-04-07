import React, { useState } from "react";
import Login from "./Login";
import User from "./User";

function MyEffect() {
  const [userName, setUserName] = useState("");
  return (
    <div>
      <Login setUserName /> <User />
    </div>
  );
}

export default MyEffect;
