import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const increment= setCount
  return (
    <div>
      <h1> {count} </h1>
    </div>
  )
}

export default App
