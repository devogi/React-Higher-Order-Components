import React, { useEffect } from "react";
import axios from "axios"

function MyEffect() {
  useEffect(() => {
    axios 
    .get('https://jsonplaceholder.typicode.com/posts/1')
    
  }, []);

  return (
    <div>
      <h1>this is a text</h1>
    </div>
  );
}

export default MyEffect;
