import React from 'react'
import Navbar from './navbar'
import Page1content from './page1content'


const Section1 = (props) => {
console.log(props)

  return (
    <div>
      <Navbar />
      <Page1content users={props.users}/>
    </div>
  )
}

export default Section1
 