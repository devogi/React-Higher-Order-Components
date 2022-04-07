import React, { useEffect, useState } from "react";
import axios from "axios";

function MyEffect() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData
      });
  }, []);

  return (
    <div>
      <h1>this is a text</h1>
    </div>
  );
}

export default MyEffect;
