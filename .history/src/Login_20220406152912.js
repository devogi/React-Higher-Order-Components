import React from "react";

function Login() {
  const {setUserName} =
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
