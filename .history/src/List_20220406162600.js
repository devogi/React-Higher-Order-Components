import React, { useEffect, useState } from "react";

function List({getItems}) {
  const [items, setItems] = useState([]);

  useEffect(()=> {
setItems(getItems())
  } )
  return <div></div>;
}

export default List;
