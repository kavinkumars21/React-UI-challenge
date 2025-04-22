import React from 'react'
import './Theatre.css'

const TheatreSeat = ({ seats, status }) => {

  return (
    <div className='seat' style={{
      backgroundColor: status === "available" ? "brown " : "green",
      color : status === "available" ? "brown" : "green"
    }}>
      <p>
        {seats}
      </p>
    </div>
  )
}

export default TheatreSeat
