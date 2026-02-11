import React from 'react'

const Navbar = ({prodln}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Blinkit</a>
        <button className="btn">Total number of products : {prodln}</button>

      </div>
    </nav>

  )
}

export default  Navbar