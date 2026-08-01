import React, { useActionState, useState } from 'react'

const App = () => {

  // let num = 90;
  const [num , setfirst] = useState(10)
  const [user, setuser] = useState("kkkkkk")

  function change(){
    setfirst(78)
    setuser("hjhjhjjj")
  }

  function use(){
    setuser("jkk")
  }

  return (
    <div>
      
      <h1>The number is {num}</h1>
      <h1>The user is {user}</h1>
      <button onClick={change}>Click me </button>
      
      
    </div>
  )
}

export default App
