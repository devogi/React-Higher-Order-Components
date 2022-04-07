import React, { useEffect, useState } from "react";
import axios from "axios";

function MyEffect() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("api was called");
      });
  }, );

  return (
    <div>
      <h1> {data} </h1>
      <h1> {count} </h1>
      <button onClick={() => {
        
      }} ></button>
    </div>
  );
}

export default MyEffect;
