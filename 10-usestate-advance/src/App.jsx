import React from 'react'
import { useState } from 'react'

const App = () => {
  
  const [num, setnum] = useState({user:"Durgesh"})

  function numchange(){
    const newNum = {...num}
    newNum.user = "Gaurav"
    setnum(newNum)
  }

  return (
    <div>
      <h1>Hello World {num.user}</h1>
      <button onClick={numchange}>Click Me</button>
    </div>
  )
}

export default App
