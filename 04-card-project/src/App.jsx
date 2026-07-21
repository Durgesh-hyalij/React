import React from 'react'
import Card from './components/card'
import User from './components/user'

const App = () => {

  const arr = [10, 20, 30, 40];
  return (
    <div className="parent">
      <User user={arr[0]} />
      <User user="Durgesh" />
      { arr.map(function(elem){

        return elem
      })}
    </div>
  )
}

export default App
