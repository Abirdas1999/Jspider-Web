import React from 'react'
import Dashboard from './Dashboard'

const Home = ({products}) => {
  return (
    <>
     <div>Home Page</div>
    <Dashboard products={products} />   
    </>
   
  )
}

export default Home