import React from 'react'
import '../style/card.css'
function Card(props) {
  return (
    <div className='card'>
        <img src={props.img}alt="" />
        <h1>{props.name}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Card