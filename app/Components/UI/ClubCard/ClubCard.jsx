import React from 'react'
import './ClubCard.module.css'

export default function ClubCard({image, title, description, links}) {
  return (
    // align-items: flex-start;
    <div className="card">
        <div className='imgContainer'>
            <img src={image} alt={title} />
        </div>
        <div></div>
        <div>
            <h3></h3>
        </div>
    </div>
  )
}
