import React, { useState } from 'react'

const Cards = ({movie}) => {
   
  const [qtyCount, setQtytCount] = useState([])

  const handleIncrease = (id) =>{
    setQtytCount(prev=>prev.map((ele)=>ele.id==id?{...ele,qty:ele.qty+1}:ele)
    )
  }

  const handleDecrease = () => {
    if (qtyCount > 0) {
      setQtytCount(prevCount => prevCount-1)
    }
  }

 

  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{movie.movieName}</h5>
        <p className="card-text">
          <strong>Actor:</strong> {movie.actorName}
        </p>
        <p className="card-text">
          <strong>Status:</strong> 
          <span className={`badge ms-2 bg-success ${movie.ticketStatus === 'Booked' ? 'bg-warning' : ''} ${movie.ticketStatus === 'Sold Out' ? 'bg-danger' : ''}`}>
            {movie.ticketStatus}
          </span>
        </p>
        <p className="card-text">
          <strong>Available Tickets:</strong> {movie.ticketNumber}
        </p>

        <div className="d-flex align-items-center gap-2 my-3">
          <button className="btn btn-outline-secondary btn-sm" onClick={handleDecrease(movie.id)}>-</button>
          <span className="fw-bold" style={{ minWidth: '30px', textAlign: 'center' }}>{movie.qty}</span>
          <button className="btn btn-outline-secondary btn-sm" onClick={handleIncrease}>+</button>
        </div>

        <button className="btn btn-success mt-auto" >
          Book Now
        </button>
      </div>
    </div>
  )
}

export default Cards ;