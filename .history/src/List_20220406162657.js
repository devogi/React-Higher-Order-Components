import React, { useEffect, useState } from "react";

function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("updating items")
  }, [getItems]);
  return items.map(item =>  <div key={} >

  </div> )
}

export default List;