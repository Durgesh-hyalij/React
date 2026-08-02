import React from 'react'
import { useState } from 'react'

const App = () => {
  
  const submitHandler = (e) => {
      e.preventDefault()
      console.log("Form Submitted Successfully");
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type='text' placeholder='Enter your Name' onChange={(e)=>{
          console.log(e.target.value);
          
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
     