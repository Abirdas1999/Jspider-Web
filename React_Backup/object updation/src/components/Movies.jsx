import React from 'react'
import Cards from './Cards'

const Movies = ({ movies }) => {
    // console.log({movies})
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Movies</h1>
      <div className="row">
        {movies.map((movie, index) => (
          <div key={index} className="col-md-3 mb-4">
            <Cards movie={movie} />
          </div>          
        ))}
      </div>
    </div>
  )
}

export default Movies