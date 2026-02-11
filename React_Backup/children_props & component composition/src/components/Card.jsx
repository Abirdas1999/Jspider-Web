import React from 'react'

const Card = ({ product, children }) => {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img src={product.image} alt={product.title} className="card-img-top p-3" style={{ height: '200px', objectFit: 'contain' }} />
      <div className="card-body">
        <h5 className="card-title text-dark fw-semibold" style={{ minHeight: '50px', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{product.title}</h5>
        <p className="card-text text-muted small" style={{ display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{product.description}</p>
      </div>
      <div className="card-footer bg-light border-top d-flex justify-content-between align-items-center">
        <span className="text-success fw-bold fs-5">${product.price}</span>
        <span className="text-warning fw-semibold">⭐ {product.rating.rate}</span>
      </div>
      {children}
    </div>
  )
}

export default Card