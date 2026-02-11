import React from 'react'
import Productlist from './Productlist'

const Product = ({products}) => {
  return (
    <>
    <div className="row mt-4">
        {products.map((product) => {
        return ( <Productlist key={product.id} product={product} /> )
                

    })}
    </div>
    
    </> 
  )
}

export default Product