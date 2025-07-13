import React from 'react'
import './Card.css'

const Card = ({icon,title,desc}) => {
  return (
    <div className='card'>
      <div className="card-header">
        <div className="icon">
          {icon}
        </div>
        <div className="title">
          {title}
        </div>
      </div>
      <div className="card-content">
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default Card
