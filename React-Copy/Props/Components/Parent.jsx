import React from 'react'
import Child from './Child'

function Parent({sname,getName}) {
  return (
    <>
        <h1 className="text-4xl font-bold text-center mt-8">Parent</h1>
        <h1 className='text-4xl text-center mt-8'>Old Name is <span className='text-amber-500 font-semibold'>{sname}</span></h1>
        <Child getName={getName}/>
    </>

  )
}

export default Parent