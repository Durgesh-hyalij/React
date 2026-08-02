import React from 'react'
import { useState } from 'react'

const App = () => {
  
  const change = () => {
    console.log("Form Sumitted successfully ");
    
  }

  return (
    <div>
      <form onSubmit={change}>
        <input type='text' placeholder='Enter your Name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
