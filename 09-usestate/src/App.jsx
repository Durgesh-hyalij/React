import React, { useState } from 'react'

function App() {
  const [num, setfirst] = useState(0)

  function increase(){
  setfirst(num + 1)
}

function decrease(){
  setfirst(num -1 )
}

function times5(){
  setfirst(num + 5)
}

function clearr(){
  setfirst(0)
}

  return (
    <div>
      <h1>{num}</h1>
        <button onClick={increase}>Incrasing</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={times5}>add 5</button>
        <button onClick={clearr}>clear</button>
    </div>
  )
}

export default App
