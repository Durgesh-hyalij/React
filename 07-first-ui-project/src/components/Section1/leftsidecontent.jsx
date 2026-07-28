import React from 'react'
import Herotext from './herotext'
import Arrow from './Arrow';

const Leftsidecontent = () => {
  return (
    <div  className='h-full w-1/3 bg-blue-200 flex flex-col justify-between '>
        <Herotext />
        <Arrow/>
    </div>
  )
}

export default Leftsidecontent
