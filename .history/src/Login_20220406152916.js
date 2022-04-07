import React, { useContext } from "react";

function Login() {
  const {setUserName} =useContext
  return (
    <div>
      <input
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
    </div>
  );
}

export default Login;
