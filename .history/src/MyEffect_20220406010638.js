import React, { createContext, useState } from "react";
import Login from "./Login";
import User from "./User";

const myContext = createContext(null);
function MyEffect() {
  const [userName, setUserName] = useState("");
  return (
    <myContext.Provider value={{ username, setUsername }}>
      <Login /> <User />
    </myContext.Provider>
  );
}

export default MyEffect;
