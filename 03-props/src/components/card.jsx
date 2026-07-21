import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <h1>{props.user}, {props.age}</h1>
        <p>{props.para}</p>
        <button>Click Me</button>
        <img src={props.img}></img>
      </div>
    </div>
  )
}

export default Card
