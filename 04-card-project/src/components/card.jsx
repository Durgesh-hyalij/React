import React from 'react'
// import {Bookmark} from react-lucid
import { Bookmark } from 'lucide-react';

const Card = () => {
  return (
    <div className='parent'>
      <div className="card">

        <div className="top">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGARB4PRYKkemGJgn2lUROMMlKLDLTxSgd0SDZ_b_hF-zr5EwsH-I0GcPi&s=10"></img>
            <button >save <Bookmark /></button>
        </div>

        <div className="center">
            <h2>Amazon</h2>
            <h4>5 days before</h4>

            <h1>Senoior UI/UX designer</h1>
             <span>Part Time</span>
             <span>Senior Level</span>
        </div>

        <div className="bottom">
            <div>
                <h2>$120/hr</h2>
                <p>Mumbai, India</p>
            </div>
            <button>Apply Now</button>
        </div>

      </div>
    </div>
  )
}

export default Card
