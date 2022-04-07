import React, { useEffect } from "react";
import axios from "axios"

function MyEffect() {
  const [data, setData] = useS
  useEffect(() => {
    axios 
    .get('https://jsonplaceholder.typicode.com/comments')
    .then((response) => {

    } )
    
  }, []);

  return (
    <div>
      <h1>this is a text</h1>
    </div>
  );
}

export default MyEffect;
