import React from 'react'
import Product from './Product'

function Service({props}) {
  return (
    <>
    <div>Dashboard</div>
    <Product props={props} />
    </>
  )
}

export default Service