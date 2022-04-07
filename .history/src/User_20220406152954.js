import React, { useContext } from "react";

function User() {
  const { userName } = useContext(myContext);
  return (
    <div>
      <h1>User : {userName}</h1>
    </div>
  );
}

export default User;
