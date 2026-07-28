import React from 'react'
import Rightcard from './Rightcard'

const rightsidecontent = (props) => {
  return (
    <div className='h-full w-3/4 '>
      {/* <Rightcard users={props.users}/>   */}

       {props.users.map(function(elem){
        return <Rightcard img={elem.img} />
      })}


    </div>
  )
}

export default rightsidecontent
