import React from 'react'
import DemoData from '../Utility/DemoData'
import EachProduct from './EachProduct'

function Products() {
  return (
    <div className="container pb-5">
      <h1 className="text-center text-dark mb-5">Our Products</h1>

      <div className="row g-4">
        {DemoData.map((product) => (
          <EachProduct product={product}/>
        ))}
      </div>
    </div>
  )
}

export default Products