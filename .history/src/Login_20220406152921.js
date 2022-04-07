import React, { useContext } from "react";
import { myContext } from "./MyEffect";

function Login() {
  const {setUserName} =useContext(myContext)
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
