import React from 'react'
import Rows from '../Components/MovieBooking/Rows'

const MovieBooking = () => {
  return (
    <>
        <div style={{textAlign: 'center'}}>
            <h1>Movie Seat Booking</h1>
        </div>
        <div style={{textAlign: 'center', backgroundColor: 'grey', marginLeft: "20px", marginRight: '20px', borderRadius: '4px'}}>
            <p>SCREEN</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: "10px"}}>
            <Rows />
        </div>
    </>
  )
}

export default MovieBooking
