import React from 'react'
import { useState } from 'react'

const App = () => {
  
  const submitHandler = (e) => {
      e.preventDefault()
      console.log("Form nn1Submitted Successfully");
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type='text' placeholder='Enter your Name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
