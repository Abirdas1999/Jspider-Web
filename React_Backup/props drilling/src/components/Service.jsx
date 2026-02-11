import React from 'react'
import Product from './Product'

const Service = ({products}) => {
  return (
   <>
    <div>Service Page</div>
    <Product products={products} />
   </>
  )
}

export default Service