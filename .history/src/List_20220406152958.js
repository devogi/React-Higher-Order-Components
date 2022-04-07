import React, { useContext } from "react";
import { myContext } from "./MyEffect";

function User() {
  const { userName } = useContext(myContext);
  return (
    <div>
      <h1>User : {userName}</h1>
    </div>
  );
}

export default User;
