import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
  return (
    <div className='h-full w-80 bg-red-500 rounded-4xl flex flex-nowrap gap-10'>
       <img className='h-full w-full object-cover ' src={props.img} ></img>
        <Rightcardcontent users={props.users}/>
        <Rightcardcontent/>
        <Rightcardcontent/>
        <Rightcardcontent/>
        <Rightcardcontent/>
    </div>
  )
}  

export default Rightcard
 