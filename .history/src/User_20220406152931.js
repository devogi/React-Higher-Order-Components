import React from "react";

function User({ userName }) {
  const {setUserName} =useContext(myContext)
  return (
    <div>
      <h1>User : {userName}</h1>
    </div>
  );
}

export default User;
