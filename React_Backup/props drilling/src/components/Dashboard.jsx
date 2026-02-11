import React from 'react'
import Service from './Service'

const Dashboard = ({products}) => {
  return (
    <>
    <div>Dashboard Page</div>
    <Service products={products} />
    </>
    
    
  )
}

export default Dashboard