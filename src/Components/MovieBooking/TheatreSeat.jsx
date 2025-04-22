import React from 'react'
import './Theatre.css'

const TheatreSeat = ({ seats }) => {

  return (
    <div className='seat'>
      <p>
        {seats}
      </p>
    </div>
  )
}

export default TheatreSeat
