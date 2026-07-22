import React from 'react'
// import {Bookmark} from react-lucid
import { Bookmark } from 'lucide-react';

const Card = (props) => {
  return (
    <div className='parent'>
      <div className="card">

        <div className="top">
            <img src={props.logo}></img>
            <button >save <Bookmark /></button>
        </div>

        <div className="center">
            <h2>{props.company}</h2>
            <h4>{props.posted}</h4>

            <h1>{props.title}</h1>
             <span>{props.type}</span>
             <span>{props.level}</span>
        </div>

        <div className="bottom">
            <div>
                <h2>{props.salary}</h2>
                <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
        </div>

      </div>
    </div>
  )
}

export default Card
