import React, { useState } from "react";
import Login from "./Login";
import User from "./User";

const 
function MyEffect() {
  const [userName, setUserName] = useState("");
  return (
    <div>
      <Login /> <User />
    </div>
  );
}

export default MyEffect;
