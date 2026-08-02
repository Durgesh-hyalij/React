import React from 'react'
import { useState } from 'react'

const App = () => {
  
  const [num, setnum] = useState([10, 20, 30])

  function numchange(){
    const newnum = [...num]
    newnum.push(50)
    setnum(newnum)
  }

  return (
    <div>
      <h1>Hello World {num}</h1>
      <button onClick={numchange}>Click Me</button>
    </div>
  )
}

export default App
