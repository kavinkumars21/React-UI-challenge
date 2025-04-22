import React from 'react'
import TheatreSeat from './TheatreSeat'
import { SeatData } from './SeatData'

const Rows = () => {

    return (
        <>
            {
                SeatData.map((row, index) => (
                    <div key={index} style={{ display: 'flex' }}>
                        <div>
                            <h3 style={{ marginRight: "15px" }}>{row.rowLabel}</h3>
                        </div>
                        <div style={{ display: "flex", gap: "10px" }}>
                            {
                                row.rowOfSeat.map((seats) => (
                                    <div key={seats}>
                                        <TheatreSeat seats={seats.seatNumber} status={seats.status} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Rows
