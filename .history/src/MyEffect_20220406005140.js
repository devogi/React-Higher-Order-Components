import React from "react";
import Login from "./Login";
import User from "./User";

function MyEffect() {
  const {userName, setUserName} = useS
  return (
    <div>
      <Login /> <User />
    </div>
  );
}

export default MyEffect;
