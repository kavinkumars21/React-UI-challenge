import React from 'react'
import './Theatre.css'

const TheatreSeat = ({ seats, status }) => {

  return (
    <div className='seat' style={{
      backgroundColor: status === "available" ? "gray " : "lightgray",
    }}>
      <p className='seatNumber'>
        {seats}
      </p>
    </div>
  )
}

export default TheatreSeat
