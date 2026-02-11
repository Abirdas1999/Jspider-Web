import React from 'react'
import Dashboard from './Dashboard'

export function Home({props}) {
  return (
    <>
        <h1 className= ' text-3xl text-blue-800'>Welcome to Home Page</h1>
        <Dashboard props={props} />
    </>
  )
}
