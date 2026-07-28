import React from 'react'
import Section1 from './components/Section1/section1.jsx'
import Section2 from './components/Section2/section2.jsx'

const users = [
  {
   img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800',
   intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti?',
   Tag: 'Satisfied '
  }, 
  {
    img: 'https://images.unsplash.com/photo-1782221125171-bbc7a9c568b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D',
   intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti?',
   Tag: 'unatisfied '
  }, 
  {
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800',
   intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti?',
   Tag: 'Satisfied '
  }
]

const App = () => {
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
