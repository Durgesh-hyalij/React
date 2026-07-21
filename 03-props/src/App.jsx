import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className="parent">
      <Card user="Durgesh" age={21} para="Hii i am a durgesh" img="https://images.unsplash.com/photo-1784290624621-ebd162d17b8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" />
      <Card user="Rakesh" age={22} para="Hii i am a Rakesh" img="https://images.unsplash.com/photo-1779896412124-9d2711feda0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Gaurav  " age={20} para="Hii i am a Gaurav"  img="https://plus.unsplash.com/premium_photo-1784150655034-241de79483f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Pravin" age={22} para="Hii i am a Pravin"  img="https://plus.unsplash.com/premium_photo-1784150655034-241de79483f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D"/>
      
    </div>
  )
}

export default App
