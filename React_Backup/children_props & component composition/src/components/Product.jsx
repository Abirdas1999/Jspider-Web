import React from 'react'

const Product = ({ children }) => {
  // Transform children array into a grid of columns
  const childrenArray = React.Children.toArray(children)
  
  return (
    <div className="bg-light py-5 min-vh-100">
      <div className="container">
        <div className="row g-4">
          {childrenArray.map((child, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product