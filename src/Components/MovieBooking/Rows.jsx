import React from 'react'
import TheatreSeat from './TheatreSeat'

const Rows = () => {
    const Seat = [
        {
            rowLabel : "A",
            numberOfSeat: ['A1','A2','A3','A4','A5','A6','A7']
        },
        {
            rowLabel : "B",
            numberOfSeat: ['B1','B2','B3','B4','B5','B6','B7']
        },
        {
            rowLabel : "C",
            numberOfSeat: ['C1','C2','C3','C4','C5']
        },
        {
            rowLabel : "D",
            numberOfSeat: ['D1','D2','D3','D4','D5']
        },
        {
            rowLabel : "E",
            numberOfSeat: ['E1','E2','E3']
        },
        {
            rowLabel : "F",
            numberOfSeat: ['F1','F2','F3']
        }
    ];

  return (
    <>
        {
            Seat.map((row,index) => (
                <div key={index} style={{display: 'flex'}}>
                    <div>
                        <h3 style={{marginRight: "15px"}}>{row.rowLabel}</h3>
                    </div>
                    <div style={{display: "flex" , gap: "10px"}}>
                        {
                            row.numberOfSeat.map((seats) => (
                                <div key={seats}>
                                    <TheatreSeat seats = {seats}/>
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
