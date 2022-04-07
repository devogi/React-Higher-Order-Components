import React from "react";

function Login() {
  const {setUserName} =useC
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
