import React from 'react'
import Leftsidecontent from './leftsidecontent'
import Rightsidecontent from './rightsidecontent'

const Page1content = (props) => {
  return (
    <div className='py-10 flex items-center gap-10 h-[90vh] bg-pink-500 px-18'>
      < Leftsidecontent/>
      < Rightsidecontent users={props.users}/>
    </div>
  )
}

export default Page1content
